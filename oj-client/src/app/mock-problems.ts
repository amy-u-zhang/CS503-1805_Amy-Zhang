import { Problem } from '../model/problem.model';

export const PROBLEMS: Problem[] = [
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