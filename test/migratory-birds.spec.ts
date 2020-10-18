// https://www.hackerrank.com/challenges/migratory-birds/problem
import { expect } from 'chai';

import { createBirdEntity, findCommonBirdType, findMinimumTypeInCommonBirdType } from '../src/migrartory-birds';

describe('철새를 구하는 문제에서는', () => {
  it('배열을 받으면 birdEntity 을 생성한다.', () => {
    const arr = [1, 2, 2, 3, 5, 5, 5];
    const birdEntity = createBirdEntity(arr);
    expect(birdEntity).deep.equal({
      1: 1,
      2: 2,
      3: 1,
      5: 3,
    });
  });

  it('bidEntity 중에서 가장 큰 value 를 가진 key 를 추출한다', () => {
    const arr = [1, 2, 2, 3, 5, 5, 5];
    const commonBirdType = findCommonBirdType(arr);
    expect(commonBirdType).to.have.members([5]);
  });

  it('bidEntity 중에서 가장 큰 value 를 가진 key 가 두 개 이상인 경우, key 의 값이 가장 작은 것을 추출한다.', () => {
    const arr = [1, 2, 2, 2, 3, 5, 5, 5];
    const minimumType = findMinimumTypeInCommonBirdType(arr);
    expect(minimumType).deep.equal(2);
  });
});
