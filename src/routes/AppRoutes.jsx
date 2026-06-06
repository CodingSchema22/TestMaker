import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
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
        <Route path="/setting" element={<Setting/>}/>
        <Route
  path="/subjects"
  element={<Subjects />}
/>
        <Route path="/profile" element={<Profile/>}/>
        <Route
  path="/chapters"
  element={<Chapters />}
/>
        <Route path="/generated-tests" element={<GeneratedTests />}/>
        <Route path="/test-preview" element={<TestPreview />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="/questions" element={<QuestionBank />} />
   <Route path="/add-question" element={<AddQuestion />}/>

      </Routes>
    </BrowserRouter>
  );
}