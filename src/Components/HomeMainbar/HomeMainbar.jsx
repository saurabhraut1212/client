import React from 'react';
import "./HomeMainbar.css";
import {useLocation,useNavigate} from "react-router-dom";
import QuestionsList from './QuestionsList';
const HomeMainbar = () => {
	var questionsList = [{
	    _id: 1,
	    upVotes: 3,
	    downVotes: 2,
	    noOfAnswers: 2,
	    questionTitle: "What is a function?",
	    questionBody: "It meant to be",
	    questionTags: ["java", "node js", "react js", "mongo db", "express js"],
	    userPosted: "mano",
	    userId: 1,
	    askedOn: "jan 1",
	    answer: [{
	        answerBody: "Answer",
	        userAnswered: 'kumar',
	        answeredOn: "jan 2",
	        userId: 2,
	    }]
	},{
	    _id: 2,
	    upVotes: 3,
	    downVotes: 2,
	    noOfAnswers: 0,
	    questionTitle: "What is a function?",
	    questionBody: "It meant to be",
	    questionTags: ["javascript", "R", "python"],
	    userPosted: "mano",
	    askedOn: "jan 1",
	    userId: 1,
	    answer: [{
	        answerBody: "Answer",
	        userAnswered: 'kumar',
	        answeredOn: "jan 2",
	        userId: 2,
	    }]
	},{
	    _id: 3,
	    upVotes: 3,
	    downVotes: 2,
	    noOfAnswers: 0,
	    questionTitle: "What is a function?",
	    questionBody: "It meant to be",
	    questionTags: ["javascript", "R", "python"],
	    userPosted: "mano",
	    askedOn: "jan 1",
	    userId: 1,
	    answer: [{
	        answerBody: "Answer",
	        userAnswered: 'kumar',
	        answeredOn: "jan 2",
	        userId: 2,
	    }]
	}]

    const location=useLocation();
    const user = null;
	const navigate = useNavigate();


    const AuthCheck=()=>{
        if(user===null){
         alert('Sign up or login up for ask the question');
         navigate('/Auth');
        }
        else{
            navigate('/AskQuestion')
        }
    }

	return (
		<div className="main-bar">
			<div className="main-bar-header">
				{location.pathname === '/' ? (
					<h1>Top Quetions</h1>
				) : (
					<h1>All Quetions</h1>
				)}
				<button  onClick={AuthCheck} className="ask-btn">
					Ask Question
				</button>
			</div>
			<div>
				{questionsList === null ? (
					<h1>Loading..,</h1>
				) : (
					<>
						<p>{questionsList.length} questions</p>
						<QuestionsList questionsList={questionsList} />
					</>
				)}
			</div>
		</div>
	);
};

export default HomeMainbar;