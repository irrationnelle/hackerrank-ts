const createBirdEntity = (targetArr: number[]): Record<number, number> =>
  targetArr.reduce((acc: Record<number, number>, curr: number) => {
    if (acc[curr]) {
      acc[curr] += 1;
      return acc;
    }
    acc[curr] = 1;
    return acc;
  }, {});

const findCommonBirdType = (targetArr: number[]): number[] => {
  const birdEntity = createBirdEntity(targetArr);
  const maximumKeys = Object.keys(birdEntity).reduce(
    (acc: number[], curr: string) => {
      const key = parseInt(curr, 10);
      if (acc.length === 0) {
        acc = [key];
        return acc;
      }
      const maxKey = acc[0];
      if (birdEntity[maxKey] < birdEntity[key]) {
        acc = [key];
        return acc;
      }
      if (birdEntity[maxKey] === birdEntity[key]) {
        acc = [...acc, key];
        return acc;
      }
      return acc;
    }, [],
  );
  return maximumKeys;
};

const findMinimumTypeInCommonBirdType = (targetArr: number[]): number =>
  findCommonBirdType(targetArr).reduce((acc: number, curr: number) =>
    (acc < curr ? acc : curr));

export { createBirdEntity, findCommonBirdType, findMinimumTypeInCommonBirdType };
