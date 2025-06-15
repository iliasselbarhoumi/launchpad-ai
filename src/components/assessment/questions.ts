export interface Question {
  id: string;
  section: string;
  category: string;
  text: string;
}

export const questions: Question[] = [
  // Section 1: Mindset & Personality
  { id: 'resilience_1', section: 'Mindset & Personality', category: 'Resilience & Grit', text: 'When faced with a significant setback, I quickly find a way to bounce back.' },
  { id: 'resilience_2', section: 'Mindset & Personality', category: 'Resilience & Grit', text: 'I am comfortable with long periods of sustained effort to achieve a goal.' },
  { id: 'resilience_3', section: 'Mindset & Personality', category: 'Resilience & Grit', text: 'Criticism, even harsh, helps me learn and improve rather than discouraging me.' },
  { id: 'resilience_4', section: 'Mindset & Personality', category: 'Resilience & Grit', text: 'I rarely give up on a project, even when it becomes very difficult.' },

  { id: 'risk_1', section: 'Mindset & Personality', category: 'Risk Tolerance', text: 'I am comfortable making decisions with incomplete information.' },
  { id: 'risk_2', section: 'Mindset & Personality', category: 'Risk Tolerance', text: 'The idea of financial uncertainty for a greater reward does not unduly stress me.' },
  { id: 'risk_3', section: 'Mindset & Personality', category: 'Risk Tolerance', text: 'I am willing to take calculated risks to achieve my aspirations.' },
  { id: 'risk_4', section: 'Mindset & Personality', category: 'Risk Tolerance', text: 'I am more concerned with the potential upside of an opportunity than the potential downside.' },

  { id: 'proactivity_1', section: 'Mindset & Personality', category: 'Proactivity & Initiative', text: 'I often take the lead in projects or situations, even without being asked.' },
  { id: 'proactivity_2', section: 'Mindset & Personality', category: 'Proactivity & Initiative', text: 'When I see a problem, I immediately think about solutions and how to implement them.' },
  { id: 'proactivity_3', section: 'Mindset & Personality', category: 'Proactivity & Initiative', text: 'I prefer to create opportunities rather than waiting for them to appear.' },
  { id: 'proactivity_4', section: 'Mindset & Personality', category: 'Proactivity & Initiative', text: 'I am self-motivated and don\'t need external pressure to start tasks.' },

  { id: 'adaptability_1', section: 'Mindset & Personality', category: 'Adaptability & Learning Agility', text: 'I enjoy learning new skills and readily adapt to new technologies or methods.' },
  { id: 'adaptability_2', section: 'Mindset & Personality', category: 'Adaptability & Learning Agility', text: 'Changes in plans or unexpected challenges don\'t usually derail me.' },
  { id: 'adaptability_3', section: 'Mindset & Personality', category: 'Adaptability & Learning Agility', text: 'I am open to revising my ideas or strategies based on new information or feedback.' },
  { id: 'adaptability_4', section: 'Mindset & Personality', category: 'Adaptability & Learning Agility', text: 'I actively seek out feedback, even if it means admitting I was wrong.' },

  { id: 'creativity_1', section: 'Mindset & Personality', category: 'Creativity & Problem-Solving', text: 'I often come up with innovative or unconventional solutions to problems.' },
  { id: 'creativity_2', section: 'Mindset & Personality', category: 'Creativity & Problem-Solving', text: 'I enjoy brainstorming and exploring multiple possibilities for a challenge.' },
  { id: 'creativity_3', section: 'Mindset & Personality', category: 'Creativity & Problem-Solving', text: 'I see problems as opportunities for invention rather than obstacles.' },
  { id: 'creativity_4', section: 'Mindset & Personality', category: 'Creativity & Problem-Solving', text: 'I can connect seemingly unrelated ideas to form new concepts.' },

  // Section 2: Knowledge & Skills
  { id: 'acumen_1', section: 'Knowledge & Skills', category: 'Business Acumen & Market Awareness', text: 'I have a basic understanding of how businesses generate revenue and profit.' },
  { id: 'acumen_2', section: 'Knowledge & Skills', category: 'Business Acumen & Market Awareness', text: 'I pay attention to market trends and consumer needs.' },
  { id: 'acumen_3', section: 'Knowledge & Skills', category: 'Business Acumen & Market Awareness', text: 'I can identify a potential target audience for a product or service.' },
  { id: 'acumen_4', section: 'Knowledge & Skills', category: 'Business Acumen & Market Awareness', text: 'I understand the importance of validating a business idea before building it.' },

  { id: 'product_1', section: 'Knowledge & Skills', category: 'Product & Technology Understanding', text: 'I have a general understanding of how digital products (apps, websites, software) are built.' },
  { id: 'product_2', section: 'Knowledge & Skills', category: 'Product & Technology Understanding', text: 'I am comfortable learning about new technologies relevant to product development.' },
  { id: 'product_3', section: 'Knowledge & Skills', category: 'Product & Technology Understanding', text: 'I can articulate a problem that a digital product could solve.' },
  { id: 'product_4', section: 'Knowledge & Skills', category: 'Product & Technology Understanding', text: 'I am familiar with the concept of a Minimum Viable Product (MVP).' },

  { id: 'marketing_1', section: 'Knowledge & Skills', category: 'Marketing & Sales Awareness', text: 'I understand the basics of how products are promoted and sold online.' },
  { id: 'marketing_2', section: 'Knowledge & Skills', category: 'Marketing & Sales Awareness', text: 'I am comfortable communicating the value of an idea or product to others.' },
  { id: 'marketing_3', section: 'Knowledge & Skills', category: 'Marketing & Sales Awareness', text: 'I know what \'user acquisition\' or \'customer retention\' means.' },
  { id: 'marketing_4', section: 'Knowledge & Skills', category: 'Marketing & Sales Awareness', text: 'I am willing to put myself out there to get initial users or customers.' },

  // Section 3: Motivation & Vision
  { id: 'motivation_1', section: 'Motivation & Vision', category: 'Drive', text: 'My primary motivation for starting a business is to solve a meaningful problem.' },
  { id: 'motivation_2', section: 'Motivation & Vision', category: 'Drive', text: 'I am driven by the desire for autonomy and control over my work.' },
  { id: 'motivation_3', section: 'Motivation & Vision', category: 'Drive', text: 'I am excited by the prospect of building something from scratch that has an impact.' },
  { id: 'motivation_4', section: 'Motivation & Vision', category: 'Drive', text: 'I am prepared to potentially earn less or work longer hours initially for future rewards.' },
  { id: 'motivation_5', section: 'Motivation & Vision', category: 'Drive', text: 'I have a clear vision for the kind of impact I want to make through my work.' }
];

export const scaleLabels = [
    'Rarely/Never',
    'Sometimes',
    'Often',
    'Almost Always'
];
