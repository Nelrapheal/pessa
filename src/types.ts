export interface Department {
  id: string;
  name: string;
  color: string;
  description: string;
  iconName: string;
  courses: string[];
  research: string[];
  careers: string[];
  headOfDept: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Social' | 'Career' | 'Research';
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}