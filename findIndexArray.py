def findIndexArray(array: list):
    """
    Finds the index number at which the left and the right sub arrays
    add up to the same result

    Time complexity: O(n)
    Space complexity: O(1)
    """
    leftIndex = 0
    leftSum = 0
    rightIndex = len(array) - 1
    rightSum = 0

    while (leftIndex < rightIndex):
        leftSum += array[leftIndex]
        rightSum += array[rightIndex]

        if (leftIndex + 1 == rightIndex):
            return rightIndex

        while (leftSum < rightSum):
            leftIndex += 1
            leftSum += array[leftIndex]

        while (rightSum < leftSum):
            rightIndex -= 1
            rightSum += array[rightIndex]

        if (leftIndex == rightIndex):
            return leftIndex

        leftIndex += 1
        rightIndex -= 1

    if (leftIndex == rightIndex and leftSum == rightSum):
        return leftIndex
    else:
        return None


print(findIndexArray([1, 2, 6, 3]))
print(findIndexArray([2, 1, 2, 1, 3, 2]))
print(findIndexArray([2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14]))
