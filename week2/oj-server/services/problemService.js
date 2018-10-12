let problems = [
	{
	"id" : 1,
	"name" : "Two Sum",
	"desc" : "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
	"difficulty" : "Easy"
	},
	{
	"id" : 2,
	"name" : "Add Two Numbers",
	"desc" : "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.",
	"difficulty" : "Medium"
	},
	{
	"id" : 3,
	"name" : "Longest Substring Without Repeating Characters",
	"desc" : "Given a string, find the length of the longest substring without repeating characters.",
	"difficulty" : "Medium"
	},
	{
	"id" : 4,
	"name" : "Median of Two Sorted Arrays",
	"desc" : "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty.",
	"difficulty" : "Hard"
	},
	{
	"id" : 5,
	"name" : "Regular Expression Matching",
	"desc" : "Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.",
	"difficulty" : "Super"
	}
];

const problemM = require('../models/problemModel');

const getProblems = function() {
	return new Promise((resolve, reject) => {
			resolve(problems);
		});
	// return new Promise((resolve, reject) => {
	// 	problemModel.find({}, (err, problems) => {
	// 		if (err) {
	// 			reject(err);
	// 		} else {
	// 			resolve(problems);
	// 		}
	// 	});
	// });
}

const getProblem = function(id) {
	return new Promise((resolve, reject) => {
		resolve(problems.find(problem => problem.id === id));
	});
	// return new Promise((resolve, reject) => {
	// 	problemModel.findOne({id: id}, (err, problem) => {
	// 		if (err) {
	// 			reject(err);
	// 		} else {
	// 			resolve(problem);
	// 		}
	// 	});
	// });
}

const addProblem = function(newProblem) {
	return new Promise((resolve, reject) => {
		//
		if (problems.find(problem => problem.name === newProblem.name)){
			reject('problem already exists');
		} else {
			newProblem.id = problems.length + 1;
			problems.push(newProblem);
			resolve(newProblem);

		}
	});
	// return new Promise((resolve, reject) => {
	// 	//check if the problem already exists
	// 	problemModel.findOne({name: newProblem.name}, (err, data) => {
	// 		if (data) {
	// 			reject('Problem already exists');
	// 		} else {
	// 			//save to mongodb
	// 			problemModel.count({}, (err, count) => {
	// 				newProblem.id = count + 1;
	// 				const mongoProblem = new problemModel(newProblem);
	// 				mongoProblem.save();
	// 				resolve(mongoProblem);
	// 			});
	// 		}
	// 	});
	// });
}

module.exports = {
	getProblems,
	getProblem,
	addProblem
}


