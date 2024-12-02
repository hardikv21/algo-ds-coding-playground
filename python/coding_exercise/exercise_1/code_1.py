def is_arrays_contain_common_item1(arr1: [str], arr2: [str]) -> bool:
    # If any array is empty return false
    if len(arr1) == 0 or len(arr2) == 0:
        return False

    # Find the biggest array list
    big_array = "arr2" if len(arr1) > len(arr2) else "arr1"

    # Convert the smallest array into the object
    big_array_obj = {}

    for item in (arr1 if big_array == "arr2" else arr2):
        big_array_obj[item] = True

    # Loop through the biggest array and check the item exists in the newly created object
    for item in (arr2 if big_array == "arr2" else arr1):
        if item in big_array_obj:
            return True

    return False

def is_arrays_contain_common_item2(arr1: [str], arr2: [str]) -> bool:
    return any(item in arr1 for item in arr2)