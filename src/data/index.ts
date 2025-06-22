
import { Project, TeamMember } from '@/types';
import { mockTeamMembers } from './teamMembers';
import { mockMiniProjects } from './miniProjects';
import { mockMajorProjects } from './majorProjects';
import { mockRndProjects } from './rndProjects';
import { mockKscstProjects } from './kscstProjects';
import { mockFundedProjects } from './fundedProjects';

export { mockTeamMembers };

export const mockProjects: Project[] = [
  ...mockMiniProjects,
  ...mockMajorProjects,
  ...mockRndProjects,
  ...mockKscstProjects,
  ...mockFundedProjects
];
