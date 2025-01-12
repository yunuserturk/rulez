"use client";

import { useState, useEffect, useCallback } from "react";
import { rulesSchema, type CursorRoles, type DevLanguage, type Platform } from "@/lib/schema";
import { motion, AnimatePresence } from "framer-motion";

type Step = {
  id: string;
  title: string;
};

const additionalRules = [
  {
    id: "git_workflow",
    title: "Git Workflow",
    rules: [
      "- Use feature branches for all new features and bug fixes",
      "- Use semantic commit messages",
      "- Protect the main branch with code reviews",
      "- Delete local and remote feature branches after merging",
      "- Keep branches up to date with main",
      "- Use git rebase for cleaner history",
      "- Write meaningful commit messages",
      "- Use git hooks for code quality",
      "- Regular backups of repositories",
      "- Use git tags for releases",
    ],
  },
  {
    id: "code_quality",
    title: "Code Quality",
    rules: [
      "- Follow clean code principles",
      "- Use consistent code formatting",
      "- Write self-documenting code",
      "- Keep functions small and focused",
      "- Use meaningful variable names",
      "- Avoid code duplication",
      "- Write unit tests for new code",
      "- Regular code reviews",
      "- Use static code analysis",
      "- Regular refactoring sessions",
    ],
  },
  {
    id: "documentation",
    title: "Documentation",
    rules: [
      "- Keep README up to date",
      "- Document all APIs",
      "- Include setup instructions",
      "- Document environment variables",
      "- Add inline code comments",
      "- Create architecture diagrams",
      "- Document deployment process",
      "- Maintain changelog",
      "- Document testing strategy",
      "- Keep documentation versioned",
    ],
  },
  {
    id: "security",
    title: "Security Practices",
    rules: [
      "- Regular security audits",
      "- Secure credential management",
      "- Regular dependency updates",
      "- Security testing in CI/CD",
      "- Code security scanning",
      "- Access control reviews",
      "- Security incident response plan",
      "- Regular penetration testing",
      "- Security training for team",
      "- Vulnerability management",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    rules: [
      "- Implement comprehensive application monitoring",
      "- Set up real-time alerting system",
      "- Monitor system resources and performance",
      "- Track user behavior and analytics",
      "- Implement distributed tracing",
      "- Set up error tracking and reporting",
      "- Create monitoring dashboards",
      "- Configure log aggregation",
      "- Monitor service dependencies",
      "- Regular monitoring review and optimization",
    ],
  },
  {
    id: "caching",
    title: "Caching Strategy",
    rules: [
      "- Implement multi-layer caching strategy",
      "- Use appropriate cache invalidation methods",
      "- Configure browser caching properly",
      "- Implement API response caching",
      "- Set up CDN caching",
      "- Use memory caching for frequent data",
      "- Implement database query caching",
      "- Monitor cache hit rates",
      "- Handle cache failures gracefully",
      "- Regular cache maintenance",
    ],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    rules: [
      "- Implement code splitting and lazy loading",
      "- Optimize asset delivery and compression",
      "- Use efficient data structures and algorithms",
      "- Implement proper database indexing",
      "- Optimize API response times",
      "- Monitor and optimize memory usage",
      "- Implement proper error boundaries",
      "- Regular performance testing",
      "- Use performance monitoring tools",
      "- Optimize build and bundling process",
    ],
  },
  {
    id: "team_collaboration",
    title: "Team Collaboration",
    rules: [
      "- Regular team meetings",
      "- Clear communication channels",
      "- Knowledge sharing sessions",
      "- Pair programming sessions",
      "- Code review guidelines",
      "- Team coding standards",
      "- Regular retrospectives",
      "- Cross-training sessions",
      "- Documentation reviews",
      "- Team skill development",
    ],
  },
  {
    id: "project_management",
    title: "Project Management",
    rules: [
      "- Clear project roadmap",
      "- Regular status updates",
      "- Risk management plan",
      "- Resource allocation",
      "- Timeline tracking",
      "- Budget monitoring",
      "- Stakeholder communication",
      "- Quality assurance process",
      "- Change management process",
      "- Project documentation",
    ],
  },
  {
    id: "devops",
    title: "DevOps Practices",
    rules: [
      "- Automated deployments",
      "- Infrastructure as code",
      "- Monitoring and alerting",
      "- Log management",
      "- Backup and recovery",
      "- Environment parity",
      "- Configuration management",
      "- Continuous integration",
      "- Continuous deployment",
      "- Incident management",
    ],
  },
];

const steps: Step[] = [
  { id: "devLanguage", title: "Development Language" },
  { id: "framework", title: "Framework" },
  { id: "platform", title: "Platform" },
  { id: "styling", title: "UI Framework" },
  { id: "stateManagement", title: "State Management" },
  { id: "database", title: "Database" },
  { id: "backendPlatform", title: "Backend Platform" },
  { id: "auth", title: "Authentication" },
  { id: "security", title: "Security" },
  { id: "testing", title: "Testing" },
  { id: "deployment", title: "Deployment" },
  { id: "ci_cd", title: "CI/CD" },
  { id: "logging", title: "Logging" },
  { id: "additionalRules", title: "Additional Rules" },
];

// Update FormDataType to match CursorRoles interface
type FormDataType = Omit<CursorRoles, "customRules"> & {
  [key: string]: string | string[] | undefined;
};

// Enhanced TypeScript guidelines with more comprehensive rules
const getTypeScriptGuidelines = () => `
  ### TypeScript Standards
  - Enable strict mode in tsconfig with all strict flags
  - Use proper type annotations and avoid 'any'
  - Leverage type inference for cleaner code
  - Implement interfaces for object shapes
  - Use discriminated unions for complex state
  - Implement proper error handling with custom types
  - Use generics for reusable components
  - Maintain strict null checks
  - Use readonly where applicable
  - Implement proper type guards`;

// Enhanced framework guidelines with more detailed rules
const getFrameworkGuidelines = (framework: string) => {
  const guidelines: Record<string, string> = {
    React: `
  ### React Best Practices
  - Use functional components with hooks
  - Implement proper state management 
  - Follow component composition patterns
  - Maintain proper prop drilling practices
  - Use React.memo for performance optimization
  - Implement proper error boundaries
  - Use React Query for data fetching
  - Implement proper code splitting
  - Use proper React hooks patterns
  - Maintain accessibility standards`,
    "Next.js": `
  ### Next.js Architecture
  - Utilize appropriate data fetching methods:
    * getServerSideProps for dynamic data
    * getStaticProps for static data
    * Incremental Static Regeneration when needed
  - Implement proper routing strategies
  - Use appropriate rendering methods:
    * SSR for dynamic content
    * SSG for static pages
    * ISR for hybrid approaches
  - Follow Next.js file-system based routing
  - Optimize images using Next/Image
  - Implement proper metadata handling
  - Use proper caching strategies
  - Implement API routes effectively
  - Maintain proper error handling
  - Use middleware appropriately`,
    Vue: `
  ### Vue.js Standards
  - Follow Vue 3 Composition API patterns
  - Implement proper component architecture
  - Use Vue Router with proper guards
  - Maintain state management hierarchy:
    * Composition API for simple state
    * Pinia for complex state
  - Follow Vue.js style guide strictly
  - Use Single File Components
  - Implement proper error handling
  - Maintain proper prop validation
  - Use proper computed properties
  - Implement proper watchers`,
  };
  return (
    guidelines[framework] ||
    `
  ### ${framework} Guidelines
  - Follow ${framework} best practices
  - Maintain consistent project structure
  - Implement proper state management
  - Follow official style guide
  - Maintain proper error handling
  - Implement proper testing strategy`
  );
};

const getStyleGuidelines = (style: string) => {
  const guidelines: Record<string, string> = {
    TailwindCSS: `
  - Follow utility-first CSS approach
  - Use proper responsive design classes
  - Maintain consistent spacing scale
  - Implement custom theme configuration
  - Use @apply for repeated patterns`,
    ShadcN: `
  - Utilize shadcn/ui component patterns
  - Maintain consistent theming
  - Follow accessibility guidelines
  - Implement proper dark mode support
  - Use proper component composition`,
  };

  return `### Styling Guidelines${
    guidelines[style] ||
    `
  - Follow ${style} best practices
  - Maintain consistent styling patterns
  - Implement responsive design
  - Follow component styling guidelines`
  }`;
};

// Enhanced database guidelines
const getDatabaseGuidelines = (data: Partial<CursorRoles>) => {
  if (!data.database || !Array.isArray(data.database) || data.database.length === 0) return "";

  const primaryDb = data.database[0]; // Get the primary database

  const dbGuidelines: Record<string, string> = {
    PostgreSQL: `
  ### PostgreSQL Standards
  - Implement proper connection pooling
  - Use migrations for schema changes
  - Implement proper indexing strategy
  - Maintain ACID compliance
  - Use proper transaction management
  - Implement proper backup strategy
  - Use proper query optimization
  - Implement proper security measures
  - Maintain proper logging
  - Use proper connection handling`,
    MongoDB: `
  ### MongoDB Standards
  - Implement proper schema design
  - Use proper indexing strategy
  - Implement proper sharding strategy
  - Maintain proper backup strategy
  - Use proper connection pooling
  - Implement proper security measures
  - Use proper query optimization
  - Maintain proper logging
  - Use proper error handling
  - Implement proper monitoring`,
  };

  return (
    dbGuidelines[primaryDb] ||
    `
  ### Database Guidelines
  - Implement proper ${primaryDb} connection handling
  - Use connection pooling where applicable
  - Implement proper error handling
  - Use migrations for schema changes
  - Implement proper backup strategies
  - Maintain proper security measures
  - Use proper monitoring tools
  - Implement proper logging
  - Use proper optimization techniques
  - Maintain proper documentation`
  );
};

const getStateManagementGuidelines = (data: Partial<CursorRoles>) => {
  const stateManagement = data.stateManagement;
  if (!stateManagement) return "";

  let guidelines = "### State Management Guidelines\n";
  const smArray = Array.isArray(stateManagement) ? stateManagement : [stateManagement];

  smArray.forEach((sm) => {
    guidelines += `
  - Follow ${sm} best practices
  - Implement proper store structure
  - Use proper action/mutation patterns
  - Maintain proper state immutability
  - Implement proper error handling`;
  });
  return guidelines;
};

// Enhanced testing guidelines
const getTestingGuidelines = (data: Partial<CursorRoles>) => {
  if (!data.testing) return "";

  const testingGuidelines: Record<string, string> = {
    Jest: `
  ### Jest Testing Standards
  - Maintain minimum 80% code coverage
  - Implement proper unit tests
  - Use proper mocking strategies
  - Implement integration tests
  - Use proper test organization
  - Implement proper snapshot testing
  - Use proper async testing
  - Maintain proper test isolation
  - Use proper setup and teardown
  - Implement proper error testing`,
    Cypress: `
  ### Cypress E2E Standards
  - Implement proper E2E test strategy
  - Use proper selector strategy
  - Implement proper test organization
  - Use proper fixture handling
  - Implement proper custom commands
  - Use proper network stubbing
  - Maintain proper test isolation
  - Implement proper visual testing
  - Use proper CI integration
  - Maintain proper documentation`,
  };

  return (
    testingGuidelines[data.testing as string] ||
    `
  ### Testing Guidelines
  - Implement proper ${data.testing} testing strategies
  - Follow test-driven development practices
  - Implement proper error handling
  - Maintain proper test coverage
  - Use proper test organization
  - Implement proper mocking
  - Use proper assertions
  - Maintain proper documentation
  - Implement proper CI integration
  - Use proper test reporting`
  );
};

const getAuthGuidelines = (data: Partial<CursorRoles>) => {
  if (!data.auth) return "";
  return `"### Authentication Guidelines
  - Implement secure ${data.auth} flow
  - Handle token management properly
  - Implement proper session handling
  - Follow security best practices
  - Implement proper error handling`;
};

const getDeploymentGuidelines = (data: Partial<CursorRoles>) => {
  if (!data.deployment) return "";
  return `### Deployment Guidelines
  - Follow ${data.deployment} best practices
  - Implement proper environment configuration
  - Use proper build optimization
  - Implement proper monitoring
  - Handle deployment failures`;
};

const getLoggingGuidelines = (data: Partial<CursorRoles>) => {
  if (!data.logging) return "";
  return `### Logging Guidelines
  - Implement proper ${data.logging} configuration
  - Use appropriate log levels
  - Include relevant context
  - Handle sensitive information
  - Implement proper retention policies`;
};

export default function Home() {
  const [formData, setFormData] = useState<FormDataType>({
    devLanguage: "" as DevLanguage,
    platform: "" as Platform,
  });
  const [preview, setPreview] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [customInputs, setCustomInputs] = useState<Record<string, string>>({});
  const [showCustomInput, setShowCustomInput] = useState<Record<string, boolean>>({});

  // Helper function to get available options for current step
  const getOptionsForStep = (stepId: string): string[] | null => {
    const getArrayCopy = <T extends readonly string[]>(arr: T): string[] => [...arr];

    switch (stepId) {
      case "devLanguage":
        return getArrayCopy(rulesSchema.devlanguage);
      case "framework":
        return formData.devLanguage
          ? getArrayCopy(rulesSchema.framework[formData.devLanguage as keyof typeof rulesSchema.framework] || [])
          : [];
      case "platform":
        return getArrayCopy(rulesSchema.platform);
      case "styling":
        return getArrayCopy(rulesSchema.styling);
      case "database":
        return getArrayCopy(rulesSchema.database);
      case "testing":
        return getArrayCopy(rulesSchema.testing);
      case "deployment":
        return getArrayCopy(rulesSchema.deployment);
      case "auth":
        return getArrayCopy(rulesSchema.auth);
      case "backendPlatform":
        return getArrayCopy(rulesSchema.backendplatform);
      case "stateManagement":
        return formData.framework
          ? getArrayCopy(
              rulesSchema.statemanagement[formData.framework as keyof typeof rulesSchema.statemanagement] || []
            )
          : [];
      case "logging":
        return getArrayCopy(rulesSchema.logging);

      case "ci_cd":
        return getArrayCopy(rulesSchema.ci_cd);
      case "additionalRules":
        return additionalRules.map((rule) => rule.title);
      default:
        return [];
    }
  };

  const handleSelect = (stepId: string, value: string) => {
    setFormData((prev) => {
      const currentValue = prev[stepId as keyof typeof prev];

      // For additional rules step, handle multiple selections
      if (stepId === "additionalRules") {
        const currentRules = (currentValue as string[]) || [];
        if (currentRules.includes(value)) {
          // Remove the value if it's already selected
          return {
            ...prev,
            [stepId]: currentRules.filter((rule) => rule !== value),
          };
        } else {
          // Add the new value
          return {
            ...prev,
            [stepId]: [...currentRules, value],
          };
        }
      }

      // For single-select options
      if (currentValue === value) {
        // Remove the value if it's already selected
        const newData = { ...prev };
        delete newData[stepId as keyof typeof newData];
        return newData;
      }

      // Set the new value
      return {
        ...prev,
        [stepId]: value,
      };
    });

    // Hide custom input when selecting any option
    setShowCustomInput((prev) => ({ ...prev, [stepId]: false }));

    // Get the current step
    const currentStep = steps[currentStepIndex];

    // Only auto-advance if:
    // 1. We're adding a new value (not toggling off)
    // 2. The current step matches the stepId being modified
    // 3. It's not the additional rules step
    if (currentStep.id === stepId && stepId !== "additionalRules") {
      const currentValue = formData[stepId as keyof typeof formData];
      const isToggleOff = currentValue === value;

      if (!isToggleOff) {
        handleNext();
      }
    }
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const validateForm = (data: Partial<CursorRoles>): string[] => {
    const errors: string[] = [];
    if (!data.devLanguage) errors.push("Development Language is required");
    if (!data.platform) errors.push("Platform is required");
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blob = new Blob([preview], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = ".cursorroles";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const updatePreview = useCallback((data: FormDataType) => {
    const errors = validateForm(data);
    setErrors(errors);

    if (errors.length > 0) {
      setPreview("Select options to generate Cursor roles...");
      return;
    }

    if (!data.devLanguage) {
      setPreview("Select options to generate Cursor roles...");
      return;
    }

    // Helper function to safely join array values
    const safeJoin = (value: string | string[] | undefined): string => {
      if (!value) return "";
      if (Array.isArray(value)) return value.join(", ");
      return String(value);
    };

    const content = `# Cursor Development Guidelines
## Project Configuration
Language: ${data.devLanguage}${data.framework ? ` with ${data.framework}` : ""}
Platform: ${data.platform}
Generated: ${new Date().toLocaleDateString()}

## Project Overview
This file contains development guidelines and best practices for ${data.platform} development using ${
      data.devLanguage
    }${data.framework ? ` and ${data.framework}` : ""}.

## Technology Stack
- Language: ${data.devLanguage}
${data.framework ? `- Framework: ${data.framework}\n` : ""}${data.platform ? `- Platform: ${data.platform}\n` : ""}${
      data.styling ? `- UI Framework: ${safeJoin(data.styling)}\n` : ""
    }${data.database ? `- Database: ${safeJoin(data.database)}\n` : ""}${
      data.backendPlatform ? `- Backend Platform: ${safeJoin(data.backendPlatform)}\n` : ""
    }${data.auth ? `- Authentication: ${safeJoin(data.auth)}\n` : ""}${
      data.security ? `- Security: ${safeJoin(data.security)}\n` : ""
    }

## Development Standards

${data.devLanguage === "TypeScript" ? getTypeScriptGuidelines() : ""}

${data.framework ? getFrameworkGuidelines(data.framework) : ""}

${data.styling ? getStyleGuidelines(String(data.styling)) : ""}

${getDatabaseGuidelines(data)}

${getStateManagementGuidelines(data)}

${getTestingGuidelines(data)}

${getAuthGuidelines(data)}


${getDeploymentGuidelines(data)}

${getLoggingGuidelines(data)}

${data.additionalRules ? getSelectedAdditionalRules(data.additionalRules as string[]) : ""}

### Error Handling Standards
- Implement comprehensive error boundaries
- Use proper error logging and monitoring
- Handle edge cases and failure scenarios
- Provide meaningful error messages
- Implement proper error recovery
- Use proper error tracking
- Maintain proper error documentation
- Implement proper fallback UI
- Use proper error reporting
- Maintain proper error analytics

### Documentation Requirements
- Maintain comprehensive README.md
- Document API endpoints and interfaces
- Include setup instructions
- Document environment variables
- Keep documentation in sync with code
- Maintain proper API documentation
- Use proper JSDoc comments
- Maintain architecture documentation
- Document deployment procedures
- Keep security documentation updated

### Code Review Guidelines
- Follow pull request templates
- Require minimum two reviewers
- Check for security vulnerabilities
- Ensure test coverage requirements
- Review for performance implications
- Validate accessibility compliance
- Check for proper error handling
- Review documentation updates
- Validate code style compliance
- Check for proper testing

### Version Control Standards
- Use meaningful commit messages
- Follow conventional commits
- Create detailed pull requests
- Maintain clean git history
- Use feature branches
- Implement proper branching strategy
- Maintain proper tagging
- Use proper merge strategy
- Implement proper CI/CD
- Maintain proper documentation

### Development Workflow
1. Create feature branch from main
2. Implement changes following guidelines
3. Write/update tests
4. Update documentation
5. Create pull request
6. Address review comments
7. Merge after approval
8. Deploy to staging
9. Verify in staging
10. Deploy to production

### Additional Considerations
- Follow accessibility guidelines (WCAG 2.1)
- Implement proper SEO practices
- Consider internationalization
- Maintain mobile-first approach
- Regular security audits
- Performance monitoring
- Regular dependency updates
- Code quality metrics
- Technical debt management
- Regular architecture reviews
`;

    setPreview(content);
  }, []);

  useEffect(() => {
    updatePreview(formData);
  }, [formData, updatePreview]);

  // Add function to handle step navigation
  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  // Add animation variants
  const pillVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // Update the step status function
  const getStepStatus = (step: Step, index: number) => {
    const value = formData[step.id as keyof typeof formData];
    const isSkipped = index < currentStepIndex && !value;
    const isCompleted = value || isSkipped;

    if (isSkipped) return "skipped";
    if (isCompleted) return "completed";
    if (currentStepIndex === index) return "current";
    return "pending";
  };

  const handleCustomInputChange = (stepId: string, value: string) => {
    setCustomInputs((prev) => ({
      ...prev,
      [stepId]: value,
    }));
  };

  const handleCustomInputSubmit = (stepId: string) => {
    if (customInputs[stepId]?.trim()) {
      const value = customInputs[stepId].trim();
      handleSelect(stepId, value);
      setCustomInputs((prev) => ({ ...prev, [stepId]: "" }));
      setShowCustomInput((prev) => ({ ...prev, [stepId]: false }));
    }
  };

  const getSelectedAdditionalRules = (selectedRules: string[]) => {
    let rulesContent = "";
    selectedRules.forEach((ruleTitle) => {
      const rule = additionalRules.find((r) => r.title === ruleTitle);
      if (rule) {
        rulesContent += `\n### ${rule.title}\n${rule.rules.join("\n")}\n`;
      }
    });
    return rulesContent;
  };

  return (
    <main className="min-h-screen p-6">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold mb-6 text-center"
      >
        CursorRules - AI-Powered Development Guidelines
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
      >
        Transform your development workflow with intelligent rule management. Create consistent coding standards and AI
        development practices for your team with our powerful rules engine.
      </motion.p>

      {/* Selected Options Pills */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Selected Options</h2>
        <motion.div className="flex flex-wrap gap-2" layout>
          <AnimatePresence>
            {steps.map((step, index) => {
              const value = formData[step.id as keyof typeof formData];
              if (!value) return null;

              // Handle array values
              if (Array.isArray(value)) {
                return value.map((v) => (
                  <motion.button
                    key={`${step.id}-${v}`}
                    variants={pillVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onClick={() => handleStepClick(index)}
                    className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded-full flex items-center gap-1.5 hover:bg-blue-200 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium">{step.title}:</span>
                    <span>{String(v)}</span>
                  </motion.button>
                ));
              }

              // Handle single values
              return (
                <motion.button
                  key={step.id}
                  variants={pillVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => handleStepClick(index)}
                  className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded-full flex items-center gap-1.5 hover:bg-blue-200 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">{step.title}:</span>
                  <span>{String(value)}</span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Current Questions */}
        <div className="w-full md:w-1/2">
          {/* Steps Navigation */}
          <motion.div className="mb-6 flex items-center gap-1.5 relative flex-wrap" layout>
            {steps.map((step, index) => {
              const status = getStepStatus(step, index);
              const isActive = status === "current";

              return (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial="initial"
                  animate={isActive ? "hover" : "initial"}
                  whileHover="hover"
                  variants={{
                    initial: { width: "2rem" },
                    hover: {
                      width: "auto",
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <motion.button
                    onClick={() => handleStepClick(index)}
                    className={`h-8 rounded-full flex items-center justify-center text-xs font-medium group ${
                      status === "current"
                        ? "bg-blue-500 text-white"
                        : status === "completed"
                        ? "bg-green-100 text-green-800"
                        : status === "skipped"
                        ? "bg-gray-300 text-gray-600"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    style={{
                      minWidth: "2rem",
                      width: "100%",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex-shrink-0">{index + 1}</span>
                    <motion.span
                      variants={{
                        initial: { width: 0, opacity: 0, marginLeft: 0 },
                        hover: {
                          width: "auto",
                          opacity: 1,
                          marginLeft: "0.25rem",
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        },
                      }}
                      className="overflow-hidden whitespace-nowrap text-xs"
                    >
                      {step.title}
                      {status === "skipped" && <span className="ml-0.5 opacity-50">(skipped)</span>}
                    </motion.span>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Current Step */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {steps.slice(currentStepIndex, currentStepIndex + 1).map((step) => (
                <section key={step.id} className="space-y-3">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold flex items-center gap-2">{step.title}</h2>
                  </div>

                  {Array.isArray(getOptionsForStep(step.id)) ? (
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {(getOptionsForStep(step.id) as string[]).map((option) => {
                          const isSelected = Array.isArray(formData[step.id as keyof typeof formData])
                            ? (formData[step.id as keyof typeof formData] as string[]).includes(option)
                            : formData[step.id as keyof typeof formData] === option;

                          return (
                            <button
                              key={`${step.id}-${option}`}
                              type="button"
                              onClick={() => handleSelect(step.id, option)}
                              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                                isSelected ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                              } ${isSelected ? "ring-1 ring-blue-300 ring-offset-1" : ""}`}
                            >
                              {option}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          onClick={() => setShowCustomInput((prev) => ({ ...prev, [step.id]: true }))}
                          className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                            showCustomInput[step.id]
                              ? "bg-blue-500 text-white ring-1 ring-blue-300 ring-offset-1"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          + Custom
                        </button>
                      </div>
                      {showCustomInput[step.id] && (
                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            value={customInputs[step.id] || ""}
                            onChange={(e) => handleCustomInputChange(step.id, e.target.value)}
                            placeholder={`Enter custom ${step.title.toLowerCase()}`}
                            className="flex-1 px-3 py-1.5 text-sm border rounded-full focus:ring-1 focus:ring-blue-300 focus:border-blue-500 outline-none"
                            onKeyDown={(e) => e.key === "Enter" && handleCustomInputSubmit(step.id)}
                          />
                          <button
                            onClick={() => handleCustomInputSubmit(step.id)}
                            className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <button onClick={handleSkip} className="text-sm text-gray-500 hover:text-gray-700">
                    Skip this step →
                  </button>
                </section>
              ))}

              {/* Progress Indicator */}
              <div className="mt-6">
                <div className="flex justify-between mb-1.5 text-sm">
                  <span>Progress</span>
                  <span>
                    {Math.round(
                      (steps.filter(
                        (step, index) =>
                          getStepStatus(step, index) === "completed" || getStepStatus(step, index) === "skipped"
                      ).length /
                        steps.length) *
                        100
                    )}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-blue-500 rounded-full h-1.5 transition-all"
                    style={{
                      width: `${
                        (steps.filter(
                          (step, index) =>
                            getStepStatus(step, index) === "completed" || getStepStatus(step, index) === "skipped"
                        ).length /
                          steps.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {currentStepIndex >= steps.length - 2 && (
                <button
                  onClick={handleSubmit}
                  disabled={errors.length > 0}
                  className={`w-full py-2 text-base font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors ${
                    errors.length > 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Generate .cursorroles
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - Preview */}
        <motion.div className="w-full md:w-1/2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="sticky top-6">
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-auto max-h-[calc(100vh-150px)] text-sm transition-all">
              <code>{preview}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
