export const formatInstructions = (instructions: string) => {
    return instructions.split(". ").map((step, index) => (
        <p key={index}>
            <strong>STEP {index + 1}:</strong> {step}.
        </p>
    ));
};
