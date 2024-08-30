import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, ExternalLink, Info, Link, Edit2, MessageCircle } from 'lucide-react'

const SolutionPage = () => {
  const [isFollowing, setIsFollowing] = useState(true);
  const [followers, setFollowers] = useState(1287);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowers(isFollowing ? followers - 1 : followers + 1);
  };

  const handleSuggestEdit = () => {
    // Placeholder function for suggest edit functionality
    alert("Suggest edit functionality would be implemented here.");
  };

  const handleContributeToDiscussion = () => {
    // Placeholder function for contribute to discussion functionality
    alert("Contribute to discussion functionality would be implemented here.");
  };

  const news = [
    { date: "2024-08-20", title: "Senate committee approves new immigration bill", source: "Capitol News", link: "https://example.com/news1" },
    { date: "2024-08-15", title: "Study shows economic benefits of streamlined immigration process", source: "Economics Today", link: "https://example.com/news2" },
    { date: "2024-08-10", title: "Immigration reform advocates rally in Washington", source: "National Post", link: "https://example.com/news3" },
    { date: "2024-08-05", title: "Tech industry pushes for faster visa processing", source: "Tech Insider", link: "https://example.com/news4" },
  ];

  const legislation = [
    { 
      name: "Comprehensive Immigration Reform Act of 2024", 
      status: "In Committee",
      summary: "Aims to overhaul the entire immigration system, including pathways to citizenship and border security.",
      link: "https://www.congress.gov/bill/118th-congress/senate-bill/1234"
    },
    { 
      name: "Asylum Process Improvement Bill", 
      status: "Passed House",
      summary: "Focuses on streamlining the asylum application process and reducing case backlogs.",
      link: "https://www.congress.gov/bill/118th-congress/house-bill/5678"
    },
    { 
      name: "Visa Modernization Act", 
      status: "Introduced",
      summary: "Proposes updates to the visa system, including new categories and processing improvements.",
      link: "https://www.congress.gov/bill/118th-congress/senate-bill/9876"
    },
  ];

  const solutionDetails = [
    {
      title: "Streamline Application Process",
      description: "Implement a user-friendly digital system to simplify and expedite immigration applications. This includes developing an AI-powered document verification system and offering multilingual support throughout the process.",
      source: "https://www.migrationpolicy.org/research/modernizing-us-immigration-system-economic-competitiveness",
      sourceDescription: "Migration Policy Institute: Modernizing America's Immigration System for the 21st Century"
    },
    {
      title: "Reduce Backlogs",
      description: "Allocate more resources and improve efficiency to address the backlog of pending immigration cases. This involves implementing a triage system for time-sensitive cases and using data analytics to identify and resolve bottlenecks in the system.",
      source: "https://www.americanimmigrationcouncil.org/research/why-dont-they-just-get-line",
      sourceDescription: "American Immigration Council: Why Don't Immigrants Apply for Citizenship?"
    },
    {
      title: "Ensure Consistent Evaluation of Claims",
      description: "Develop standardized procedures and training to ensure fair and uniform application of immigration laws. This includes creating a centralized database of case precedents and implementing regular audits to maintain consistency across all USCIS offices.",
      source: "https://www.gao.gov/products/gao-22-104613",
      sourceDescription: "U.S. Government Accountability Office: Actions Needed to Improve USCIS's Oversight and Data Quality"
    },
    {
      title: "Maintain Necessary Security Measures",
      description: "Enhance information sharing and verification systems to maintain robust security protocols. This involves implementing advanced biometric verification systems and regularly updating security measures based on the latest threat assessments.",
      source: "https://www.dhs.gov/immigration-statistics/yearbook",
      sourceDescription: "Department of Homeland Security: Yearbook of Immigration Statistics"
    }
  ];

  const challengesAndObstacles = [
    {
      challenge: "Political Gridlock",
      description: "Achieving bipartisan support for comprehensive immigration reform has been historically difficult. Overcoming political divisions will require significant compromise and negotiation."
    },
    {
      challenge: "Funding Constraints",
      description: "Implementing new systems and hiring additional staff require substantial financial investment. Securing adequate funding in a budget-conscious environment poses a significant challenge."
    },
    {
      challenge: "Technological Implementation",
      description: "Developing and deploying new digital systems across all immigration services is a complex undertaking. Ensuring data security and system reliability while maintaining efficiency is a substantial technical challenge."
    },
    {
      challenge: "Balancing Security and Efficiency",
      description: "Striking the right balance between thorough security measures and streamlined processes is crucial. Overemphasis on either aspect could compromise the effectiveness of the overall system."
    }
  ];

  const relatedSolutions = [
    {
      title: "Comprehensive Border Management",
      description: "Implement advanced technologies and increase staffing at borders to enhance security while facilitating lawful travel and trade.",
      link: "/solutions/border-management",
      followers: 952
    },
    {
      title: "Integration Programs for New Immigrants",
      description: "Develop robust programs to assist new immigrants in integrating into their communities, including language classes and job training.",
      link: "/solutions/integration-programs",
      followers: 1105
    },
    {
      title: "Reform of Temporary Worker Programs",
      description: "Modernize guest worker programs to better meet labor market needs while protecting both immigrant and native workers' rights.",
      link: "/solutions/temporary-worker-reform",
      followers: 837
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="sm" onClick={() => window.location.href = 'https://dbridger1.vercel.app/'}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Debate
            </Button>
            <div className="flex items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 mr-2 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Following this will add solution updates to your feed.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button 
                variant={isFollowing ? "secondary" : "default"} 
                size="sm" 
                onClick={handleFollow}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Solution</h2>
          <CardTitle className="text-2xl font-bold">Develop a more efficient and fair process for legal immigration and asylum claims</CardTitle>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {followers} followers
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details & Challenges</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Solution Summary</h3>
                  <p>This solution aims to streamline the application process, reduce backlogs, ensure consistent evaluation of claims, and maintain necessary security measures in the U.S. immigration system. By leveraging technology, increasing resources, and standardizing procedures, we can create a more efficient and fair process for legal immigration and asylum claims. The following bills are working their way through congress.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-2">Legislation</h3>
                  <ul className="space-y-4">
                    {legislation.map((bill, index) => (
                      <li key={index}>
                        <div className="flex justify-between items-center">
                          <a href={bill.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {bill.name}
                          </a>
                          <Badge variant="outline">{bill.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{bill.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-2">Recent News</h3>
                  <ul className="space-y-2">
                    {news.map((item, index) => (
                      <li key={index} className="border-b border-gray-200 pb-2">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.date} - {item.source}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleContributeToDiscussion}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contribute to Discussion
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="details">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Solution Components</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleSuggestEdit}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Edit2 className="w-4 h-4 mr-1" />
                    Suggest Edit
                  </Button>
                </div>
                <p className="mb-4">This solution proposes a comprehensive approach to improving the U.S. immigration system through four key components:</p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  {solutionDetails.map((detail, index) => (
                    <li key={index}>{detail.title}</li>
                  ))}
                </ol>
                <p className="mb-4">These components aim to address the major inefficiencies and inconsistencies in the current system, as identified by various studies and reports<sup>1,2,3,4</sup>.</p>
                <div className="text-sm text-gray-600">
                  {solutionDetails.map((detail, index) => (
                    <p key={index}>
                      {index + 1}. <a href={detail.source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{detail.sourceDescription}</a>
                    </p>
                  ))}
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Challenges and Obstacles</h3>
                  {challengesAndObstacles.map((item, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-base font-semibold mb-1">{item.challenge}</h4>
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="related">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Related Solutions</h3>
                {relatedSolutions.map((solution, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{solution.title}</h4>
                      <Button variant="outline" size="sm">Follow</Button>
                    </div>
                    <p className="text-gray-700 mb-2">{solution.description}</p>
                    <div className="flex justify-between items-center">
                      <a href={solution.link} className="text-blue-500 hover:underline flex items-center">
                        <Link className="w-4 h-4 mr-1" />
                        View Solution
                      </a>
                      <span className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {solution.followers} followers
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SolutionPage;
