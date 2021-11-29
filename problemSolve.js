const quickSort = function (arr)
{
	if (arr.length <= 1)
		return (arr);
	const pivot = arr.shift();
	const left = [];
	const right = [];

	while(arr.length)
	{
		if (pivot <= arr[0])
		{
			right.push(arr.shift());
		}
		else
		{
			left.push(arr.shift());
		}
	}

	return (quickSort(left).concat([pivot], quickSort(right)));
}

console.log(quickSort([5,3,2,4,1]));

console.log(([1].concat([2])))