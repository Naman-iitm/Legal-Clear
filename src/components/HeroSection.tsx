import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, FileCheck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Demystify</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Legal Documents
                </span>{" "}
                with AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Upload any legal document and get instant analysis, summaries, risk assessments, 
                and plain-English explanations. No legal expertise required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={() => window.location.href = '/dashboard'}>
                <Upload className="mr-2 h-5 w-5" />
                Upload Document
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-2">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-light rounded-lg">
                  <FileCheck className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">AI Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-light rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Secure & Private</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Legal document analysis visualization"
              className="relative rounded-2xl shadow-strong w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;