import { useState } from 'react';

const useFunnel = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [responses, setResponses] = useState<any[]>([]);

    const nextStep = (response: any) => {
        setResponses((prevResponses) => [...prevResponses, response]);
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const previousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const resetFunnel = () => {
        setCurrentStep(0);
        setResponses([]);
    };

    return {
        currentStep,
        responses,
        nextStep,
        previousStep,
        resetFunnel,
    };
};

export default useFunnel;