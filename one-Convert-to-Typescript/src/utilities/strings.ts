const concat = (str1: string, str2: string): string =>{
	return str1 + str2;
};

const capitalize = (str: string): string => {
	const newStr: string = str.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
	return newStr;
};

const upperCase = (str: string): string => {
	return str.toUpperCase();
};

const lowerCase = (str: string): string => {
	return str.toLowerCase();
};


interface Strings {
    concat(str1: string, str2: string): string;
    capitalize(str: string): string;
    upperCase(str: string): string;
    lowerCase(str: string): string;
}

const strings: Strings = {
	concat,
	capitalize,
	upperCase,
	lowerCase
};

export default strings;