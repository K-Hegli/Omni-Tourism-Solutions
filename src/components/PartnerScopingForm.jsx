import React, { useState } from 'react';
import { motion } from 'framer-motion';

const solutionOptions = [
  { value: '', label: 'Select a solution...' },
  { value: 'omni-tourops', label: 'Omni TourOps - Tour Operations', requiresIntegration: true },
  { value: 'omni-reservations', label: 'Omni Reservations - Booking Engine', requiresIntegration: true },
  { value: 'omni-payments', label: 'Omni Payments - Payment Processing', requiresIntegration: true },
  { value: 'omni-connect', label: 'Omni Connect - eSIM & Connectivity', requiresIntegration: true },
  { value: 'omni-guestconnect', label: 'Omni GuestConnect - WiFi & Marketing', requiresIntegration: false },
  { value: 'omni-roi', label: 'Omni ROI - ROI Assessment Only', requiresIntegration: false }
];

export default function PartnerScopingForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    roleTitle: '',
    solutionInterest: '',
    submitterEmail: '',
    currentPMS: '',
    ndaCheckbox: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [errors, setErrors] = useState({});

  const selectedSolution = solutionOptions.find(opt => opt.value === formData.solutionInterest);
  const requiresIntegration = selectedSolution?.requiresIntegration || false;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.roleTitle.trim()) {
      newErrors.roleTitle = 'Role/title is required';
    }

    if (!formData.solutionInterest) {
      newErrors.solutionInterest = 'Please select a solution';
    }

    if (!formData.submitterEmail.trim()) {
      newErrors.submitterEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.submitterEmail)) {
      newErrors.submitterEmail = 'Please enter a valid email address';
    }

    if (requiresIntegration && !formData.ndaCheckbox) {
      newErrors.ndaCheckbox = 'NDA agreement is required for integration solutions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/scoping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          roleTitle: formData.roleTitle,
          solutionInterest: formData.solutionInterest,
          email: formData.submitterEmail,
          currentPMS: formData.currentPMS,
          nda: formData.ndaCheckbox
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitResult(result);
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'There was an error submitting your request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted && submitResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="card p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] rounded-full 
                        flex items-center justify-center text-white mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-heading text-[#ff5c33] mb-4">
            Request Submitted Successfully!
          </h3>
          
          <p className="text-gray-200 mb-6">
            Thank you for your interest in Omni solutions. Your request has been received.
          </p>

          <div className="space-y-4">
            <motion.a
              href={submitResult.playbookUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-semibold py-3 px-6 rounded-lg
                       hover:shadow-lg hover:shadow-[#ff5c33]/25 transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 mr-4"
            >
              Download Pilot Playbook
            </motion.a>

            <motion.a
              href={submitResult.scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-[#ff5c33] text-[#ff5c33] font-semibold py-3 px-6 rounded-lg
                       hover:bg-[#ff5c33] hover:text-white transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50"
            >
              Schedule Scoping Call
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 transition-colors
                         ${errors.companyName ? 'border-red-500' : 'border-gray-600 focus:border-[#ff5c33]'}`}
              placeholder="Your company name"
              aria-describedby={errors.companyName ? 'companyName-error' : undefined}
            />
            {errors.companyName && (
              <p id="companyName-error" className="text-red-400 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          {/* Role Title */}
          <div>
            <label htmlFor="roleTitle" className="block text-sm font-medium text-gray-300 mb-2">
              Your Role/Title *
            </label>
            <input
              type="text"
              id="roleTitle"
              name="roleTitle"
              value={formData.roleTitle}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 transition-colors
                         ${errors.roleTitle ? 'border-red-500' : 'border-gray-600 focus:border-[#ff5c33]'}`}
              placeholder="e.g., Operations Manager, CEO, IT Director"
              aria-describedby={errors.roleTitle ? 'roleTitle-error' : undefined}
            />
            {errors.roleTitle && (
              <p id="roleTitle-error" className="text-red-400 text-sm mt-1">{errors.roleTitle}</p>
            )}
          </div>

          {/* Solution Interest */}
          <div>
            <label htmlFor="solutionInterest" className="block text-sm font-medium text-gray-300 mb-2">
              Solution Interest *
            </label>
            <select
              id="solutionInterest"
              name="solutionInterest"
              value={formData.solutionInterest}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white
                         focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 transition-colors
                         ${errors.solutionInterest ? 'border-red-500' : 'border-gray-600 focus:border-[#ff5c33]'}`}
              aria-describedby={errors.solutionInterest ? 'solutionInterest-error' : undefined}
            >
              {solutionOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.solutionInterest && (
              <p id="solutionInterest-error" className="text-red-400 text-sm mt-1">{errors.solutionInterest}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="submitterEmail"
              name="submitterEmail"
              value={formData.submitterEmail}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 transition-colors
                         ${errors.submitterEmail ? 'border-red-500' : 'border-gray-600 focus:border-[#ff5c33]'}`}
              placeholder="your.email@company.com"
              aria-describedby={errors.submitterEmail ? 'submitterEmail-error' : undefined}
            />
            {errors.submitterEmail && (
              <p id="submitterEmail-error" className="text-red-400 text-sm mt-1">{errors.submitterEmail}</p>
            )}
          </div>

          {/* Current PMS (Optional) */}
          <div>
            <label htmlFor="currentPMS" className="block text-sm font-medium text-gray-300 mb-2">
              Current PMS/Booking System <span className="text-gray-500">(optional)</span>
            </label>
            <input
              type="text"
              id="currentPMS"
              name="currentPMS"
              value={formData.currentPMS}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 focus:border-[#ff5c33] transition-colors"
              placeholder="e.g., BookingBug, FareHarbor, Custom system"
            />
          </div>

          {/* NDA Checkbox (shown only for integration solutions) */}
          {requiresIntegration && (
            <div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="ndaCheckbox"
                  name="ndaCheckbox"
                  checked={formData.ndaCheckbox}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 w-4 h-4 text-[#ff5c33] bg-gray-800 border-gray-600 rounded
                           focus:ring-[#ff5c33]/50 focus:ring-2"
                  aria-describedby={errors.ndaCheckbox ? 'ndaCheckbox-error' : undefined}
                />
                <label htmlFor="ndaCheckbox" className="text-sm text-gray-300 leading-relaxed">
                  I agree to sign an NDA to receive detailed integration specifications and connector information *
                </label>
              </div>
              {errors.ndaCheckbox && (
                <p id="ndaCheckbox-error" className="text-red-400 text-sm mt-1 ml-7">{errors.ndaCheckbox}</p>
              )}
            </div>
          )}

          {/* GDPR Microcopy */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong>Privacy Notice:</strong> By submitting this form, you consent to Omni Solutions processing your personal data 
              to provide information about our tourism technology solutions. Your data will be stored securely and used only for 
              business communications. You may withdraw consent at any time. 
              <a href="/privacy" className="text-[#ff5c33] hover:underline ml-1">Privacy Policy</a>
            </p>
          </div>

          {/* Submit Button */}
          <div>
            {errors.submit && (
              <p className="text-red-400 text-sm mb-4">{errors.submit}</p>
            )}
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50
                         ${isSubmitting 
                           ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                           : 'bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white hover:shadow-lg hover:shadow-[#ff5c33]/25'
                         }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Request Booking Audit'
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}