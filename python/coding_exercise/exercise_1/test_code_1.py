import unittest

from coding_exercise.exercise_1.code_1 import is_arrays_contain_common_item1, is_arrays_contain_common_item2


class TestClass(unittest.TestCase):
    # Check isArraysContainCommonItem1 return false when there is no common item in 2 arrays
    def test_1(self):
        assert is_arrays_contain_common_item1(["a", "b", "c", "x"], ["z", "y", "i"]) == False

    # Check isArraysContainCommonItem1 return true when there is a common item in 2 arrays
    def test_2(self):
        assert is_arrays_contain_common_item1(["a", "b", "c", "x"], ["z", "y", "x"]) == True

    # Check isArraysContainCommonItem1 return false when any one array is empty
    def test_3(self):
        assert is_arrays_contain_common_item1(["a", "b", "c", "x"], []) == False

    # Check isArraysContainCommonItem1 return false when both the arrays are empty
    def test_4(self):
        assert is_arrays_contain_common_item1([], []) == False

    # Check isArraysContainCommonItem2 return false when there is no common item in 2 arrays
    def test_5(self):
        assert is_arrays_contain_common_item2(["a", "b", "c", "x"], ["z", "y", "i"]) == False

    # Check isArraysContainCommonItem2 return true when there is a common item in 2 arrays
    def test_6(self):
        assert is_arrays_contain_common_item2(["a", "b", "c", "x"], ["z", "y", "x"]) == True

    # Check isArraysContainCommonItem2 return false when any one array is empty
    def test_7(self):
        assert is_arrays_contain_common_item2(["a", "b", "c", "x"], []) == False

    # Check isArraysContainCommonItem2 return false when both the arrays are empty
    def test_8(self):
        assert is_arrays_contain_common_item2([], []) == False