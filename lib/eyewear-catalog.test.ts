import test from 'node:test';
import assert from 'node:assert/strict';
import {
  EYEWEAR_PRODUCTS,
  MANIFEST_LINKS,
  filterProductsByCategory,
  calculateLensPackagePrice,
  calculateCartSummary,
  validateEyeTestBooking,
  recommendFrameSizeByPupillaryDistance,
} from './eyewear-catalog';

test('manifest links include all 6 landing page routes from the JSON specification', () => {
  assert.equal(MANIFEST_LINKS.length, 6);
  assert.deepEqual(
    MANIFEST_LINKS.map((l) => l.path),
    ['/one', '/two', '/three', '/four', '/five', '/six']
  );
  assert.equal(MANIFEST_LINKS[0].label, 'Minimalist and Flat Design');
  assert.equal(MANIFEST_LINKS[5].label, 'Neobrutalism');
});

test('filterProductsByCategory filters by category and search query accurately', () => {
  const allProducts = filterProductsByCategory(EYEWEAR_PRODUCTS, 'all');
  assert.equal(allProducts.length, EYEWEAR_PRODUCTS.length);

  const titaniumOnly = filterProductsByCategory(EYEWEAR_PRODUCTS, 'Titanium');
  assert.equal(titaniumOnly.length, 2);
  assert.ok(titaniumOnly.every((p) => p.category === 'Titanium'));

  const searchByQuery = filterProductsByCategory(EYEWEAR_PRODUCTS, 'all', 'Nagerbazar');
  assert.equal(searchByQuery.length, 1);
  assert.equal(searchByQuery[0].sku, 'DD-TI-4919');
});

test('calculateLensPackagePrice computes lens tech and high-index add-ons', () => {
  const blueCutTotal = calculateLensPackagePrice(3400, 'blue-cut', false);
  assert.equal(blueCutTotal, 4300);

  const blueCutHighIndex = calculateLensPackagePrice(3400, 'blue-cut', true);
  assert.equal(blueCutHighIndex, 5150);

  const ultraThinBase = calculateLensPackagePrice(3400, 'ultra-thin', true);
  assert.equal(ultraThinBase, 5800);
});

test('calculateCartSummary computes subtotal, BOGO Gold discount, and 12% GST', () => {
  const pair1 = EYEWEAR_PRODUCTS[0]; // 3400
  const pair2 = EYEWEAR_PRODUCTS[1]; // 2650

  const standardSummary = calculateCartSummary(
    [
      { product: pair1, quantity: 1 },
      { product: pair2, quantity: 1 },
    ],
    false
  );
  assert.equal(standardSummary.subtotalInr, 6050);
  assert.equal(standardSummary.bogoDiscountInr, 0);
  assert.equal(standardSummary.gstAmountInr, 726);
  assert.equal(standardSummary.finalTotalInr, 6776);

  const bogoSummary = calculateCartSummary(
    [
      { product: pair1, quantity: 1 },
      { product: pair2, quantity: 1 },
    ],
    true
  );
  assert.equal(bogoSummary.subtotalInr, 6050);
  assert.equal(bogoSummary.bogoDiscountInr, 2650); // cheaper pair is free
  assert.equal(bogoSummary.gstAmountInr, 408); // 12% of 3400
  assert.equal(bogoSummary.finalTotalInr, 3808);
});

test('validateEyeTestBooking enforces patient name and 10-digit Indian phone number', () => {
  const invalidResult = validateEyeTestBooking({
    patientName: 'A',
    phone: '12345',
    preferredDate: '',
    timeSlot: '',
    testType: '20-Step Precision Eye Exam',
    branch: 'Jessore Road (Nagerbazar)',
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.patientName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.preferredDate);

  const validResult = validateEyeTestBooking({
    patientName: 'Subhajit Chatterjee',
    phone: '9830145678',
    preferredDate: '2026-11-10',
    timeSlot: '11:30 AM',
    testType: '20-Step Precision Eye Exam',
    branch: 'Jessore Road (Nagerbazar)',
  });
  assert.equal(validResult.valid, true);
  assert.equal(validResult.confirmationCode, 'DD-5678-SU');
});

test('recommendFrameSizeByPupillaryDistance maps PD to frame dimensions', () => {
  const narrow = recommendFrameSizeByPupillaryDistance(56);
  assert.equal(narrow.sizeLabel, 'Narrow Fit');

  const medium = recommendFrameSizeByPupillaryDistance(63);
  assert.equal(medium.sizeLabel, 'Medium Standard Fit');

  const wide = recommendFrameSizeByPupillaryDistance(69);
  assert.equal(wide.sizeLabel, 'Wide Street Fit');
});
