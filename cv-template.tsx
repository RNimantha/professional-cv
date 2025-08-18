"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Award, Users, TrendingUp } from "lucide-react"

export default function ProfessionalCV() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">NIMANTHA BANDARA</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Lead Data Scientist</h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>+94 716 113 385</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>nimantabandara@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Borelasgamuwa, Sri Lanka</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/nimantha-bandara-986192132</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">PROFESSIONAL SUMMARY</h3>
          <p className="text-gray-700 leading-relaxed">
            Results-driven Lead Data Scientist with 4+ years of experience in advanced analytics, AI initiatives, and
            business intelligence. Proven track record of leading distributed teams, delivering impactful data-driven
            solutions, and driving operational efficiency improvements of up to 50%. Specialized in Natural Language
            Processing, Machine Learning, and AI implementation with expertise in cloud platforms and modern data
            architectures. Passionate about leveraging cutting-edge technologies to solve complex business challenges
            and drive strategic decision-making.
          </p>
        </CardContent>
      </Card>

      {/* Professional Experience */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">PROFESSIONAL EXPERIENCE</h3>

          {/* Current Role */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Lead Data Scientist</h4>
                <p className="text-blue-600 font-medium">Firehouse Technology</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Oct 2024 - Present</p>
                <Badge variant="secondary" className="mt-1">
                  Current Role
                </Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Team Leadership</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>50% Efficiency Gain</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-purple-500" />
                <span>40% Cost Reduction</span>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Lead and manage distributed Data Science teams across Australia and Sri Lanka, ensuring seamless
                collaboration and project delivery
              </li>
              <li>
                Collaborate with Business Analysts and PMO to gather requirements and develop strategic project roadmaps
              </li>
              <li>
                Achieved 50% improvement in ML model training efficiency through innovative incremental update
                strategies
              </li>
              <li>Reduced data pipeline operational costs by 40% through comprehensive optimization and automation</li>
              <li>
                Design and implement scalable Python ETL processes using Kafka and Airbyte for Azure Data Lake
                integration
              </li>
              <li>
                Spearhead AI initiatives including Mortar AI co-pilot, entity resolution, churn prediction, and audience
                analysis
              </li>
              <li>Manage complete ML model lifecycle from development to production deployment and monitoring</li>
              <li>Mentor team members and interns, fostering technical growth and knowledge transfer</li>
            </ul>
          </div>

          <Separator className="my-6" />

          {/* Previous Role */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Senior Data Scientist</h4>
                <p className="text-blue-600 font-medium">Firehouse Technology</p>
              </div>
              <p className="text-sm text-gray-600">Feb 2023 - Oct 2024</p>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Conducted comprehensive POC exercises for emerging data initiatives and AI solutions</li>
              <li>
                Developed automated data processing scripts, significantly reducing manual effort and increasing
                productivity
              </li>
              <li>Analyzed complex, high-volume datasets to identify actionable business insights and trends</li>
              <li>Implemented production-ready machine learning models with continuous monitoring and optimization</li>
            </ul>
          </div>

          <Separator className="my-6" />

          {/* BI Role */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Business Intelligence Engineer</h4>
                <p className="text-blue-600 font-medium">OctopusBI</p>
              </div>
              <p className="text-sm text-gray-600">May 2022 - Feb 2023</p>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Managed analytics dashboard projects for Australian Public Schools (Anglican School corporations)</li>
              <li>Developed custom analytics solutions and queries for client-specific requirements</li>
              <li>Led R&D initiatives to enhance student academic performance through innovative analytics</li>
              <li>Collaborated with development teams to optimize ETL processes and API services</li>
              <li>Conducted comprehensive BI verification across development and QA environments</li>
            </ul>
          </div>

          <Separator className="my-6" />

          {/* Internship */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Data Science Intern</h4>
                <p className="text-blue-600 font-medium">Sydpro (Pvt) Ltd</p>
              </div>
              <p className="text-sm text-gray-600">Sep 2020 - Mar 2021</p>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Identified business problems solvable through data analytics and machine learning approaches</li>
              <li>Developed data-driven solutions for student performance improvement and risk detection</li>
              <li>Built real-time analytics dashboards supporting multiple client teams</li>
              <li>Created full-stack POC applications for key R&D initiatives</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">TECHNICAL EXPERTISE</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Programming & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "PySpark", "TensorFlow", "PyTorch", "Flask", "React", "JavaScript"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">AI & Machine Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["NLP", "Deep Learning", "Computer Vision", "Neural Networks", "GPT", "LangChain", "RAG"].map(
                  (skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Cloud & Data Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Azure", "GCP", "Databricks", "Kafka", "Airbyte", "Azure Data Lake"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Analytics & Visualization</h4>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "ETL/SSMS", "GraphQL", "Postman", "Figma"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">KEY PROJECTS</h3>

          <div className="space-y-6">
            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Mortar AI Co-pilot</h4>
                  <p className="text-blue-600 font-medium">Firehouse Technology</p>
                </div>
                <p className="text-sm text-gray-600">2024</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "GPT", "LangChain", "RAG", "Azure", "NLP"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed an AI-powered co-pilot system to assist with automated decision-making processes</li>
                <li>Implemented RAG (Retrieval-Augmented Generation) architecture for enhanced context awareness</li>
                <li>Integrated with existing business workflows, improving operational efficiency by 35%</li>
                <li>Led cross-functional team of 5 engineers across Australia and Sri Lanka</li>
              </ul>
            </div>

            <Separator />

            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Intelligent Churn Prediction System</h4>
                  <p className="text-blue-600 font-medium">Firehouse Technology</p>
                </div>
                <p className="text-sm text-gray-600">2023-2024</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "TensorFlow", "Azure ML", "PySpark", "Kafka", "PowerBI"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Built end-to-end machine learning pipeline for customer churn prediction with 92% accuracy</li>
                <li>Processed over 10M customer records using distributed computing with PySpark</li>
                <li>Implemented real-time data streaming with Kafka for continuous model updates</li>
                <li>
                  Created interactive dashboards enabling business teams to identify at-risk customers proactively
                </li>
                <li>Reduced customer churn by 28% through early intervention strategies</li>
              </ul>
            </div>

            <Separator />

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Hybrid Client Entity Resolution System</h4>
                  <p className="text-blue-600 font-medium">Firehouse Technology</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    Personal Initiative
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">2023-2024</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "Autoencoders", "MinHash", "Deep Learning", "Azure", "Data Engineering", "ETL"].map(
                  (tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  <strong>Led full initiative</strong> to replace legacy rule-based entity resolution system with hybrid
                  ML approach
                </li>
                <li>
                  Designed and implemented autoencoder-based similarity detection combined with MinHash blocking
                  techniques
                </li>
                <li>
                  <strong>Achieved 67% processing time reduction</strong> - from 30 minutes to 10 minutes for equivalent
                  workloads
                </li>
                <li>
                  Successfully scaled system to process <strong>17 million client records</strong> - a capability the
                  previous system lacked
                </li>
                <li>
                  Significantly reduced cloud infrastructure costs through optimized algorithms and efficient data
                  processing
                </li>
                <li>
                  Integrated rule-based validation layer with ML predictions for enhanced accuracy and business logic
                  compliance
                </li>
                <li>
                  Delivered end-to-end solution including data preprocessing, model training, and production deployment
                </li>
              </ul>
            </div>

            <Separator />

            {/* Project 4 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Product Resolution & Clustering System</h4>
                  <p className="text-blue-600 font-medium">Firehouse Technology</p>
                </div>
                <p className="text-sm text-gray-600">2023-2024</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "Flask", "NLP", "Neural Networks", "Databricks", "Azure", "SQL", "Clustering"].map(
                  (tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  Developed full-stack product resolution system to identify duplicate products from multiple data
                  sources
                </li>
                <li>
                  Implemented advanced NLP techniques and neural networks for intelligent product matching and
                  clustering
                </li>
                <li>
                  Built interactive Flask backend with decision-making interface for merge, edit, or ignore cluster
                  recommendations
                </li>
                <li>
                  Designed clustering algorithms with accuracy scoring to assist clients in data consolidation decisions
                </li>
                <li>Integrated with Databricks for large-scale data processing and Azure cloud infrastructure</li>
                <li>Delivered end-to-end solution from data ingestion to user-facing decision support system</li>
              </ul>
            </div>

            <Separator />

            {/* Project 5 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Student Academic Performance Analytics</h4>
                  <p className="text-blue-600 font-medium">OctopusBI</p>
                </div>
                <p className="text-sm text-gray-600">2021</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "RNN", "Flask", "React", "Feature Engineering", "Academic Analytics"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  Conducted comprehensive feature analysis to identify key factors affecting student academic
                  performance
                </li>
                <li>
                  Developed RNN-based predictive model to analyze sequential academic data and performance patterns
                </li>
                <li>
                  Built full-stack application with Flask backend and React frontend for interactive data visualization
                </li>
                <li>Implemented feature importance analysis to help educators understand performance drivers</li>
                <li>
                  Created user-friendly dashboards enabling teachers and administrators to make data-driven decisions
                </li>
                <li>Delivered actionable insights for improving student outcomes in Australian Public Schools</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">EDUCATION</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Master of Science in Data Science and Artificial Intelligence
                </h4>
                <p className="text-blue-600">University of Sri Jayewardenepura</p>
              </div>
              <p className="text-sm text-gray-600">2023 - Present</p>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">Machine Learning for Professionals (Certificate)</h4>
                <p className="text-blue-600">University of Jayewardenepura & Erasmus DS and AI Consortium</p>
              </div>
              <p className="text-sm text-gray-600">2022</p>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">BSc (Hons.) Applied Statistics</h4>
                <p className="text-blue-600">University of Colombo - Faculty of Science</p>
                <p className="text-sm text-gray-600">GPA: 3.2/4.0</p>
              </div>
              <p className="text-sm text-gray-600">2017 - 2021</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Teaching Experience */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">TEACHING & MENTORING</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold text-gray-800">Guest Lecturer</h4>
                <p className="text-blue-600 text-sm">University of Colombo</p>
                <ul className="text-sm text-gray-600 mt-1">
                  <li>• Fundamentals of AI</li>
                  <li>• Introduction to Deep Learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Experience */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">LEADERSHIP & ACTIVITIES</h3>
            <div className="space-y-2 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800">Director</h4>
                <p className="text-blue-600">Rotaract Club of Faculty of Science (2018/19)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Team Leader</h4>
                <p className="text-blue-600">AIESEC in Colombo Central (2018/19)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Department Head</h4>
                <p className="text-blue-600">FOS Media - Videography & Photography (2018/19)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">University Colors</h4>
                <p className="text-blue-600">University of Colombo (2017-2019)</p>
                <ul className="text-sm text-gray-600 mt-1">
                  <li>• Rugby (2017-2019)</li>
                  <li>• Weightlifting - Vice Captain (2019)</li>
                  <li>• Rowing (2017-2019)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>References available upon request</p>
      </div>
    </div>
  )
}
