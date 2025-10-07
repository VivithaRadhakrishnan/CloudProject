AI-Powered Job Recommendation System (AWS Free Tier Project)
 Problem Statement
 Job seekers face difficulty in finding relevant opportunities that match their skills. The AI-Powered
 Job Recommendation System uses AWS Free Tier services to process resumes, analyze skills,
 and recommend jobs in real-time. The solution leverages serverless and AI-based AWS services to
 remain cost-effective while providing scalable recommendations.
 System Architecture
 The system is built on AWS Free Tier with a serverless-first approach. The architecture ensures
 minimal costs, scalability, and reliability using the following components:
 • Frontend hosted on Amazon S3 + CloudFront.
 • User authentication via AWS Cognito.
 • Resume uploads stored in Amazon S3.
 • AWS Textract extracts text from resumes (PDF/DOC).
 • AWS Comprehend analyzes text for skills and entities.
 • DynamoDB stores structured skills and job postings.
 • Recruiters post jobs using API Gateway + Lambda.
 • Lambda Matching Engine compares resumes with job requirements.
 • SNS/SES sends notifications to users.
 • CloudWatch for monitoring and logging.
 Phases of Implementation
 Phase 1 — Setup & Storage
 1 Design job portal frontend (React/Angular).
 2 Host frontend on S3 + CloudFront.
 3 Set up AWS Cognito for authentication.
 Phase 2 — Resume Processing
 1 Enable resume upload to S3.
 2 Use Textract to extract text from resumes.
 3 Use Comprehend to identify skills, education, and experience.
 Phase 3 — Job Postings Database
 1 Create DynamoDB table for job postings.
 2 Provide recruiter interface to add jobs via API Gateway + Lambda.
 Phase 4 — Matching Engine
 1 Lambda function matches skills with job descriptions.
 2 Store recommendations in DynamoDB.
 Phase 5 — Notifications
1 Configure SNS/SES for job alerts via email/SMS.
 Phase 6 — Dashboard & Monitoring
 1 User dashboard displays resumes, skills, and recommendations.
 2 Admin dashboard for recruiters.
 3 CloudWatch for monitoring.
 External Resources Required
 Datasets
 • Kaggle Resume Dataset (for training and testing).
 • Job postings datasets from Kaggle or scraped data.
 Libraries/Tools
 • Frontend: React.js or Angular.
 • Backend: Python (Boto3 SDK), Node.js.
 • Resume Parsing: PyPDF2, docx2txt, spaCy (fallback).
 • ML/NLP Enhancements: Hugging Face Transformers.
 Optional APIs
 • LinkedIn Jobs API (restricted).
 • Indeed API (requires approval).
 • OpenAI embeddings for semantic skill-job matching.
 Infrastructure/Hardware
 • Developer laptop/PC.
 • AWS Free Tier account.
