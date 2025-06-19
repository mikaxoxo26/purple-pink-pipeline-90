
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useProjects } from '@/context/ProjectContext';
import { TeamMember } from '@/types';
import { User, Plus, Mail, Briefcase } from 'lucide-react';

interface TeamMembersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamMembersModal: React.FC<TeamMembersModalProps> = ({ isOpen, onClose }) => {
  const { teamMembers, addTeamMember } = useProjects();
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    role: '',
    skills: [] as string[],
    currentProjects: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTeamMember(newMember);
    setNewMember({
      name: '',
      email: '',
      role: '',
      skills: [],
      currentProjects: [],
    });
    setIsAddingMember(false);
  };

  const handleSkillsChange = (skillsString: string) => {
    const skills = skillsString.split(',').map(skill => skill.trim()).filter(skill => skill);
    setNewMember(prev => ({ ...prev, skills }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold gradient-text">
              Team Members
            </DialogTitle>
            <Button
              onClick={() => setIsAddingMember(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
        </DialogHeader>

        {isAddingMember && (
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Team Member</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={newMember.name}
                    onChange={(e) => setNewMember(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newMember.email}
                    onChange={(e) => setNewMember(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={newMember.role}
                    onChange={(e) => setNewMember(prev => ({ ...prev, role: e.target.value }))}
                    placeholder="e.g., Frontend Developer, Project Manager"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma-separated)</Label>
                  <Input
                    id="skills"
                    value={newMember.skills.join(', ')}
                    onChange={(e) => handleSkillsChange(e.target.value)}
                    placeholder="e.g., React, TypeScript, Node.js"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button type="button" variant="outline" onClick={() => setIsAddingMember(false)}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Add Member
                </Button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </div>

                {member.skills.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">SKILLS</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-500">
                          +{member.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {member.currentProjects.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">CURRENT PROJECTS</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Briefcase className="w-3 h-3" />
                      <span>{member.currentProjects.length} active project{member.currentProjects.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {teamMembers.length === 0 && !isAddingMember && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No team members yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start by adding your first team member.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TeamMembersModal;
