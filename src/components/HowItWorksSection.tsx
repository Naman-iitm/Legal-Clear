import { Upload, Bot, FileText, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Document",
    description: "Simply drag and drop or select your legal document. We support PDF, Word, and text files.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Bot,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your document, identifying key terms, risks, and important clauses.",
    color: "text-emerald-600", 
    bgColor: "bg-emerald-100"
  },
  {
    icon: FileText,
    title: "Get Insights",
    description: "Receive a detailed report with summaries, risk assessments, and plain-English explanations.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Download,
    title: "Take Action",
    description: "Download your analysis report or ask follow-up questions about specific sections.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Process,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional legal document analysis in minutes, not hours. 
            Our streamlined process makes legal clarity accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border"></div>
                )}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;