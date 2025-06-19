
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Book, BookPlus, Calendar, Folder, FolderPlus } from 'lucide-react';

interface ProjectTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  onCreateProject: () => void;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ activeTab, onTabChange, onCreateProject }) => {
  const tabs = [
    { value: 'mini', label: 'Mini Projects', icon: Book, count: 5 },
    { value: 'major', label: 'Major Projects', icon: BookPlus, count: 4 },
    { value: 'rnd', label: 'R&D Projects', icon: Folder, count: 4 },
    { value: 'kscst', label: 'KSCST Projects', icon: Calendar, count: 10 },
  ];

  return (
    <div className="bg-white border-b sticky top-16 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={onTabChange} className="flex-1">
            <TabsList className="grid grid-cols-4 gap-2 bg-gradient-to-r from-purple-50 to-pink-50 p-1 rounded-lg h-auto border border-purple-100">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center space-x-2 px-4 py-3 rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:via-magenta-glow-500 data-[state=active]:to-amber-sun-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/80 font-playfair font-medium"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-medium">{tab.label}</span>
                    <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs font-bold">
                      {tab.count}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>

          <Button
            onClick={onCreateProject}
            className="ml-6 bg-gradient-to-r from-purple-600 via-magenta-glow-500 to-amber-sun-500 hover:from-purple-700 hover:via-magenta-glow-600 hover:to-amber-sun-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-playfair font-semibold"
          >
            <FolderPlus className="w-4 h-4 mr-2" />
            Create New Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
