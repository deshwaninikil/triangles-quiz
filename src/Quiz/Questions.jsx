import React, { useState } from 'react';

var questions = [
    {
        qid: 1,
        question: "Which triangle has all three sides equal in length?",
        options: ['Equilateral', 'Isosceles', 'Scalene'],
        ans: 'Equilateral'
    },
    {
        qid: 2,
        question: " A triangle has two sides measuring 14 meters and one side measuring 10 meters. What type of triangle is this?",
        options: ['Equilateral',
            'Isosceles',
            'Scalene'],
        ans: 'Isosceles'
    },

    {
        qid: 3,
        question: "In triangle ABC if AB = AC = BC = 10 cm, what type of triangle it is?",
        options: ['Equilateral',
            'Isosceles',
            'Scalene'],
        ans: 'Equilateral'
    },

    {
        qid: 4,
        question: "Which triangle has all three angles less than 90°?",
        options: ['Acute',
            'Right',
            'Obtuse'],
        ans: 'Acute'
    },

    {
        qid: 5,
        question: " An equilateral triangle is also an actute triangle.",
        options: ['Yes',
            'No'],
        ans: 'Yes'
    },

    {
        qid: 6,
        question: " A triangle has angle measurements of 90°, 34°, and 56°. What type of triangle is this?",
        options: ['Acute',
            'Right',
            'Obtuse'],
        ans: 'Right'
    },

    {
        qid: 7,
        question: "In a right triangle, what is the side opposite to the right angle called?",
        options: ['Altitude',
            'Leg',
            'Hypotenuse'],
        ans: 'Hypotenuse'
    },

    {
        qid: 8,
        question: "What type of triangle is ABC, where ∠A = 138°, ∠B = 14° and ∠C = 28°?",
        options: ['Acute',
            'Right',
            'Obtuse'],
        ans: 'Obtuse'
    },

    {
        qid: 9,
        question: " A triangle has angle measurements of 33°, 76°, and 71°. What type of triangle is this?",
        options: ['Acute',
            'Right',
            'Obtuse'],
        ans: 'Acute'
    },

    {
        qid: 10,
        question: "Which triangle has three unequal sides?",
        options: ['Equilateral',
            'Isosceles',
            'Scalene'],
        ans: 'Scalene'
    }

]

const Questions = (selectedOptions) => {
    const [selectedOption, setSelectedOption] = useState({})
    const array = []


    const updateSelectedOption = qid => (e) => {

        setSelectedOption(state => ({
            ...state,
            [qid]: e.target.value
        }))

    }
    return (
        <div>
            {
                questions.map((q, index) => (
                    <div key={index}>
                        <p>{q.question}</p>
                        {q.options.map((opt, index) => {
                            return (
                                <div key={index}>

                                    <input type="radio" name={q.qid} value={opt}
                                        onChange={updateSelectedOption(q.qid)} />
                                    <label>{opt}</label>

                                </div>
                            )

                        },

                        )}



                    </div>
                ))

            }  {
                Object.entries(selectedOption).map(([key, val]) =>
                    <h2 key={key}>{key}: {val}</h2>
                )
            }
        </div>
    )
}

export default Questions