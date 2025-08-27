import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Upload, FileText, Search, Filter, Plus, Eye, Download, Trash2 } from "lucide-react";
import Header from "@/components/Header";

const mockDocuments = [
  {
    id: 1,
    name: "Employment Contract - John Doe",
    type: "Contract",
    uploadDate: "2024-01-15",
    status: "Analyzed",
    riskLevel: "Low",
    summary: "Standard employment agreement with competitive benefits package."
  },
  {
    id: 2,
    name: "Software License Agreement",
    type: "License", 
    uploadDate: "2024-01-14",
    status: "Analyzing",
    riskLevel: "Medium",
    summary: "Third-party software licensing terms requiring review of liability clauses."
  },
  {
    id: 3,
    name: "Real Estate Purchase Agreement",
    type: "Purchase Agreement",
    uploadDate: "2024-01-12",
    status: "Analyzed",
    riskLevel: "High",
    summary: "Property purchase contract with several concerning clauses requiring attention."
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Document Dashboard</h1>
            <p className="text-muted-foreground">
              Manage and analyze your legal documents with AI-powered insights
            </p>
          </div>
          
          <div className="flex gap-4 mt-4 lg:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="hero" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">12</CardTitle>
              <CardDescription>Total Documents</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-accent">3</CardTitle>
              <CardDescription>Awaiting Review</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-destructive">1</CardTitle>
              <CardDescription>High Risk Items</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Upload Area */}
        <Card className="mb-8 border-2 border-dashed border-border hover:border-primary/50 transition-colors">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload a New Document</h3>
            <p className="text-muted-foreground text-center mb-4 max-w-md">
              Drag and drop your legal documents here, or click to browse. 
              We support PDF, DOC, DOCX, and TXT files.
            </p>
            <Button variant="hero">
              Choose Files
            </Button>
          </CardContent>
        </Card>

        {/* Documents List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Documents</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="pl-9 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {mockDocuments.map((doc) => (
              <Card key={doc.id} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{doc.name}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{doc.summary}</p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">Type: {doc.type}</span>
                          <span className="text-muted-foreground">Uploaded: {doc.uploadDate}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            doc.riskLevel === 'High' ? 'bg-destructive/10 text-destructive' :
                            doc.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-accent-light text-accent'
                          }`}>
                            {doc.riskLevel} Risk
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            doc.status === 'Analyzed' ? 'bg-accent-light text-accent' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;