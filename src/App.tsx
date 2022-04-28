import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {questions} from "./constants";
import BaseQuestionPage from "./questions/BaseQuestionPage";
import {Question} from "./types/Question";
import Search from "./pages/search/Search";
import ExpandedSearchItem from "./pages/search/ExpandedSearchItem";
import Map from "./pages/map/Map";

const App: React.FC = () => {
    const RenderQuestion = (question: Question, key: number) =>
        <Route key={key} path={question.link} element={<BaseQuestionPage question={question} />} />;

    return <Router>
        <Routes>question
            {questions.map(RenderQuestion)}
            <Route path="/search/expanded" element={<ExpandedSearchItem />} />
            <Route path="/search" element={<Search />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </Router>;
};

export default App;
