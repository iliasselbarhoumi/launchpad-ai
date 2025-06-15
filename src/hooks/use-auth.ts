export const useAuth = () => {
  const ideaGenerationCredits = 50;
  const ideaValidationCredits = 30;
  const ideaExecutionCredits = 20;
  const totalCredits =
    ideaGenerationCredits + ideaValidationCredits + ideaExecutionCredits;

  return {
    userMock: {
      name: "Explorer",
      avatar: "https://github.com/shadcn.png",
      email: "iliasselbarhoumi@gmail.com",
      joined: "2025-05-24T10:00:00.000Z",
      credits: totalCredits,
      creditBreakdown: {
        generation: ideaGenerationCredits,
        validation: ideaValidationCredits,
        execution: ideaExecutionCredits,
      },
    },
  };
};
