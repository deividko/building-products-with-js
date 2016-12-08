import * as ActionTypes from '../actionTypes';

const initialState = {questions: [], status: 'inited'};

export const questions = (state = initialState, action) => {
  switch (action.type) {
    // all questions logic
    case ActionTypes.GET_ALL_QUESTIONS:
      return {...state, status: 'loading', error: null};
    case ActionTypes.GET_ALL_QUESTIONS_SUCCESS:
      return {
        questions: action.payload.questions,
        status: 'done',
      };
    case ActionTypes.GET_ANSWERS_ERROR:
    case ActionTypes.ANSWER_QUESTION_ERROR:
    case ActionTypes.CREATE_QUESTION_ERROR:
    case ActionTypes.GET_ALL_QUESTIONS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.GET_ANSWERS_SUCCESS:
    case ActionTypes.ANSWER_QUESTION_SUCCESS: {
      const newQuestions = state.questions.map(q => q.id === action.payload.id ? action.payload : q);
      return {questions: newQuestions, status: 'done'};
    }
    case ActionTypes.ANSWER_QUESTION: {
      return {...state, status: {answering: action.payload.question.id}};
    }
    case ActionTypes.CREATE_QUESTION_SUCCESS: {
      const newQuestions = [...state.questions, action.payload];
      return {questions: newQuestions, status: 'done'};
    }
    default:
      return state;
  }
};
