import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Plus } from "lucide-react";

interface Resume {
  id: string;
  title: string;
  updated_at: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        // This is a placeholder - you would implement the actual resume fetching logic
        // once you have a resumes table in your database
        setResumes([]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setLoading(false);
      }
    };

    fetchResumes();
  }, [user]);

  const handleCreateCV = () => {
    navigate("/create-cv");
  };

  return (
    <div className="container-padding py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My CV Dashboard</h1>
        <Button onClick={handleCreateCV}>
          <Plus className="mr-2 h-4 w-4" /> Create New CV
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : resumes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {resumes.map((resume) => (
            <Card key={resume.id} className="overflow-hidden">
              <CardHeader className="p-6">
                <CardTitle className="text-lg">{resume.title}</CardTitle>
                <CardDescription>
                  Last updated: {new Date(resume.updated_at).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                  CV Preview
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm">Edit</Button>
                <Button size="sm">Download</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to CV Builder</CardTitle>
            <CardDescription>
              You haven't created any CVs yet. Get started by creating your first CV.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-8 rounded-md flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium mb-2">Create your first professional CV</h3>
              <p className="text-muted-foreground mb-6">
                Choose from our professionally designed templates and customize them to fit your needs.
              </p>
              <Button onClick={handleCreateCV}>
                <Plus className="mr-2 h-4 w-4" /> Create New CV
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
