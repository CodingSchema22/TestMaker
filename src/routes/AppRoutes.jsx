import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import CreateTest from "../pages/CreateTest";
import QuestionBank from "../pages/QuestionBank";
import AddQuestion from "../pages/AddQuestions";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TestPreview from "../pages/TestPreview";
import GeneratedTests from "../pages/GeneratedTests";
import Setting from "../pages/Setting";
import Profile from "../pages/Profile";
import Subjects from "../pages/Subjects";
import Chapters from "../pages/Chapters";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* AUTH */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/setting" element={<Setting />} />

        {/* TEST CREATION */}

        <Route path="/create-test" element={<CreateTest />} />

        <Route path="/questions" element={<QuestionBank />} />

        <Route path="/add-question" element={<AddQuestion />} />

        <Route path="/test-preview" element={<TestPreview />} />

        <Route path="/generated-tests" element={<GeneratedTests />} />

        {/* SUBJECTS */}

        <Route path="/subjects" element={<Subjects />} />

        <Route path="/chapters" element={<Chapters />} />

      </Routes>
    </BrowserRouter>
  );
}