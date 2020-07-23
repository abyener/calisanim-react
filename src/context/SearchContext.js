import React, { useState, useEffect } from "react";

import { Category } from "../backend/index.js";

const SearchContext = React.createContext();
const ContextProvider = SearchContext.Provider;

const Provider = props => {
   const [loading, setLoading] = useState(false);
   const [formStep, setFormStep] = useState("userType");
   const resetForm = () => {
      setFormStep("userType");
      setCategory(null);
      setCategories([]);
   };

   const [userType, setUserType] = useState(null);
   const setWorker = () => {
      setUserType("worker");
      setFormStep("category");
   };
   const setEmployee = () => {
      setUserType("employee");
      setFormStep("category");
   };

   const [category, setCategory] = useState(null);
   const [categories, setCategories] = useState([]);

   const [question, setQuestion] = useState(null);
   const [questions, setQuestions] = useState([]);

   const [ability, setAbility] = useState(null);
   const [abilities, setAbilities] = useState([]);
   useEffect(() => {
      if (formStep === "category") {
         setLoading(true);
         Category.get(category)
            .then(response => {
               setCategories(response.categories);
               setQuestions(response.questions);
               setAbilities(response.abilities);
            })
            .then(() => setLoading(false));
      }
   }, [category, formStep]);
   useEffect(() => {
      if (formStep === "category") {
         if (categories.length === 0) {
            setFormStep("questions");
         }
      }
   }, [categories]);
   useEffect(() => {
      if (category) {
         let formStep = (userType == "worker") ? "registerWorker" : "registerEmployer";
         setFormStep(formStep);
      }
   }, [category])

   const context = {
      loading,

      formStep,
      resetForm,

      userType,
      setWorker,
      setEmployee,

      category,
      setCategory,
      categories,
   };
   return <ContextProvider value={context}>{props.children}</ContextProvider>;
};

SearchContext.Provider = Provider;

export default SearchContext;
