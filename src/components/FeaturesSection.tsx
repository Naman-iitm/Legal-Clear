import { Bot, FileSearch, Shield, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description: "Advanced AI breaks down complex legal language into simple, understandable terms you can actually use.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: FileSearch,
    title: "Smart Document Parsing",
    description: "Upload PDFs, Word docs, or text files. Our system extracts key information and highlights important clauses.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Get instant alerts about potential risks, unfavorable terms, and clauses that need your attention.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Instant Summaries",
    description: "Receive comprehensive summaries that explain what the document means for you in plain English.",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    icon: CheckCircle,
    title: "Authenticity Check",
    description: "Verify document integrity and get confidence scores on the authenticity of your legal documents.",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: AlertTriangle,
    title: "Key Point Extraction",
    description: "Automatically identify the most important terms, deadlines, and obligations in any legal document.",
    gradient: "from-violet-500 to-purple-600"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No legal degree required. Our AI makes complex legal documents accessible to everyone, 
            from small business owners to individuals reviewing contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;