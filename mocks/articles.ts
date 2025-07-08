import { Article } from '@/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement',
    summary: 'World leaders agree on ambitious targets to reduce carbon emissions by 2030.',
    content: `In a landmark decision, representatives from 195 countries have reached a consensus on a new climate accord that aims to limit global warming to 1.5 degrees Celsius above pre-industrial levels. The agreement, which comes after two weeks of intense negotiations, includes commitments to phase out coal power, end deforestation, and provide financial support to developing nations.

"This is a historic moment," said UN Secretary-General António Guterres. "For the first time, we have a global commitment that truly addresses the scale of the climate crisis."

The accord requires countries to submit updated climate action plans every five years, with the first round due in 2025. It also establishes a framework for carbon markets and sets up a mechanism to address loss and damage caused by climate change.

Environmental activists have cautiously welcomed the agreement but warn that implementation will be crucial. "The real test begins now," said Greta Thunberg. "Words on paper mean nothing without concrete action."

The summit also saw unprecedented participation from the private sector, with major corporations pledging to reach net-zero emissions in their operations and supply chains by 2040.`,
    author: 'Sarah Johnson',
    publishedAt: '2025-07-05T14:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Environment',
    readTime: 4,
  },
  {
    id: '2',
    title: 'Tech Giant Unveils Revolutionary Quantum Computing Platform',
    summary: 'New quantum system promises to solve complex problems in minutes instead of years.',
    content: `In a breakthrough announcement, leading technology company QuantumTech has unveiled what it claims is the world's first commercially viable quantum computing platform. The system, named "Quantum Nexus," reportedly achieves quantum supremacy with 1,000 qubits, far surpassing previous records.

During a demonstration at the company's research facility, Quantum Nexus solved a complex optimization problem in just 3 minutes that would have taken traditional supercomputers an estimated 10,000 years to complete.

"This represents a fundamental shift in computing capability," said Dr. Elena Patel, Chief Quantum Officer at QuantumTech. "We're opening doors to solutions for problems that were previously considered unsolvable."

The platform is expected to have immediate applications in drug discovery, materials science, and cryptography. Several pharmaceutical companies have already signed partnerships to utilize the technology for modeling molecular interactions, potentially accelerating the development of new medications.

However, cybersecurity experts have raised concerns about quantum computing's ability to break current encryption standards. "This is both exciting and alarming," noted cybersecurity researcher Marcus Chen. "We need to accelerate the development of quantum-resistant encryption immediately."

QuantumTech says it will offer cloud access to Quantum Nexus beginning next quarter, with pricing based on computation time.`,
    author: 'Michael Chen',
    publishedAt: '2025-07-06T09:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Technology',
    readTime: 5,
  },
  {
    id: '3',
    title: 'Breakthrough in Alzheimers Research Offers New Hope',
    summary: 'Scientists identify key mechanism that could lead to effective treatments.',
    content: `Researchers at the National Institute of Neurological Disorders have announced a significant breakthrough in understanding the progression of Alzheimer's disease, potentially opening new avenues for treatment.

The study, published in the journal Nature Medicine, identifies a specific protein interaction that appears to trigger the formation of tau tangles, one of the hallmarks of Alzheimer's disease. By blocking this interaction in laboratory tests, researchers were able to prevent the formation of new tangles and even reduce existing ones.

"This is the most promising lead we've had in decades," said Dr. James Rodriguez, lead author of the study. "For the first time, we have a clear target that addresses the disease mechanism itself, not just the symptoms."

Clinical trials using a newly developed compound that targets this protein interaction are expected to begin within 18 months. While researchers caution that many promising treatments have failed in the past, the precision of this approach has generated unusual optimism in the medical community.

"What's particularly exciting is that this mechanism appears to be involved in other neurodegenerative diseases as well," noted Dr. Lisa Wong, a neurologist not involved in the research. "This could potentially lead to treatments for a whole class of conditions."

The Alzheimer's Association has called the discovery "a significant step forward" and announced additional funding to accelerate the research.`,
    author: 'Robert Johnson',
    publishedAt: '2025-07-04T11:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Health',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Global Markets Rally as Inflation Fears Ease',
    summary: 'Stock indices reach new highs following positive economic data.',
    content: `Global financial markets surged today as new economic data suggested inflation pressures may be easing, alleviating concerns about aggressive interest rate hikes by central banks.

The S&P 500 rose 2.3% to close at a record high, while the Nasdaq Composite gained 2.7%. European markets also rallied, with the Stoxx Europe 600 advancing 1.9%. Asian markets had already set the positive tone, with Japan's Nikkei 225 climbing 1.8% and Hong Kong's Hang Seng Index up 2.1%.

The rally was fueled by the latest Consumer Price Index report, which showed inflation increasing at an annual rate of 2.4%, below economists' expectations of 2.7% and down from 3.1% in the previous month.

"This is exactly what the market needed to see," said Maria Gonzalez, chief economist at Global Investments. "It suggests the economy is achieving a soft landing, with inflation normalizing without significant damage to growth."

Treasury yields fell on the news, with the 10-year yield dropping 15 basis points to 3.45%, its largest one-day decline in six months. The dollar weakened against major currencies, with the euro rising to $1.12.

Federal Reserve officials have indicated they would consider rate cuts if inflation continues to moderate, though they remain cautious about moving too quickly. Markets are now pricing in two quarter-point rate cuts before the end of the year.

Technology and consumer discretionary stocks led the advance, with semiconductor companies posting particularly strong gains.`,
    author: 'Jennifer Lee',
    publishedAt: '2025-07-07T16:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Finance',
    readTime: 4,
  },
  {
    id: '5',
    title: 'Artificial Intelligence Helps Discover New Antibiotic',
    summary: 'AI system identifies novel compound effective against drug-resistant bacteria.',
    content: `Scientists at the University of Cambridge have announced the discovery of a powerful new antibiotic using an artificial intelligence system designed to identify potential drug candidates. The compound, named "Halicin" after the fictional AI HAL 9000, has shown remarkable effectiveness against several antibiotic-resistant bacteria, including some of the most dangerous superbugs.

The AI system was trained on data from millions of chemical compounds and their properties, allowing it to predict which molecules might have antibacterial activity. Halicin was identified from a library of over 100 million chemical compounds in just three days—a process that would have taken years using traditional methods.

"This represents a paradigm shift in antibiotic discovery," said Professor Emma Richardson, who led the research. "We're not just finding new members of existing antibiotic classes, but entirely novel chemical structures with different mechanisms of action."

Laboratory tests showed that Halicin effectively killed Acinetobacter baumannii and Clostridioides difficile, two bacteria classified as urgent threats by the CDC due to their resistance to most available antibiotics. Importantly, bacteria exposed to Halicin did not develop resistance even after 30 days of treatment.

The discovery comes at a critical time, as antibiotic resistance continues to grow globally. The World Health Organization estimates that drug-resistant infections could cause 10 million deaths annually by 2050 without new treatment options.

Clinical trials in humans are expected to begin within 18 months, following completion of safety studies. The researchers have already used their AI system to identify several additional promising candidates that are now undergoing testing.`,
    author: 'David Kim',
    publishedAt: '2025-07-03T08:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Science',
    readTime: 5,
  },
  {
    id: '6',
    title: 'Renewable Energy Surpasses Fossil Fuels in Global Electricity Production',
    summary: 'Historic milestone reached as clean energy sources generate more power than coal, gas, and oil combined.',
    content: `For the first time in modern history, renewable energy sources have generated more electricity globally than fossil fuels, according to a new report from the International Energy Agency (IEA). The milestone, reached in the second quarter of 2025, marks a fundamental shift in the world's energy landscape.

Renewable sources—including solar, wind, hydroelectric, and geothermal—accounted for 51.3% of global electricity production, compared to 48.7% from coal, natural gas, and oil. Solar power showed the most dramatic growth, with global capacity increasing by 39% year-over-year.

"This is a pivotal moment in the energy transition," said IEA Executive Director Fatih Birol. "Just ten years ago, many thought this milestone was decades away. The acceleration we're seeing is remarkable."

China led the renewable energy expansion, adding more solar and wind capacity than the rest of the world combined. However, significant growth was also seen in India, the European Union, and the United States.

The shift has been driven by rapidly falling costs of renewable technologies, with new solar and wind installations now consistently cheaper than new fossil fuel plants in most markets. Battery storage capacity has also quadrupled in the past three years, helping to address intermittency issues.

Despite the milestone, experts caution that meeting climate goals will require continued acceleration of renewable deployment. "We need to maintain this momentum and extend it to other sectors like transportation and industry," said climate scientist Dr. Aisha Patel.

Energy analysts note that fossil fuels still dominate in total energy consumption when heating, transportation, and industrial uses are included.`,
    author: 'Thomas Wilson',
    publishedAt: '2025-07-02T13:10:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Environment',
    readTime: 5,
  },
  {
    id: '7',
    title: 'New Study Reveals Benefits of Four-Day Work Week',
    summary: 'Companies report increased productivity and employee satisfaction with reduced hours.',
    content: `A comprehensive three-year study involving over 200 companies has found that a four-day work week leads to significant improvements in productivity, employee well-being, and retention rates. The research, conducted by the Work Innovation Institute, challenges traditional assumptions about optimal work schedules.

Participating companies reduced their employees' work week from 40 to 32 hours without cutting pay, instead focusing on improving efficiency and eliminating unnecessary meetings and tasks. The results showed an average productivity increase of 8%, while employee-reported stress levels decreased by 35%.

"What we're seeing is that when people work fewer hours, they work better hours," said Dr. Maya Patel, lead researcher on the study. "They're more focused, more creative, and ultimately more effective."

Perhaps most surprisingly, 94% of the companies that participated in the study have decided to continue with the four-day work week permanently. Many reported unexpected benefits beyond productivity, including reduced absenteeism, lower utility costs, and improved recruitment capabilities.

"We've been able to attract talent that we couldn't compete for previously," said James Rodriguez, CEO of software company Flexware, which participated in the study. "And our carbon footprint has decreased by 21% due to reduced commuting and office energy use."

The findings come as several countries, including Spain, Scotland, and Japan, have launched their own national pilot programs to test reduced work hours. Some governments are considering policy incentives to encourage adoption of shorter work weeks as part of post-pandemic labor reforms.

Critics argue that the approach may not be feasible for all industries, particularly those requiring 24/7 operations or direct customer service. However, the study found successful implementations across diverse sectors, including healthcare and manufacturing, through creative scheduling solutions.`,
    author: 'Emily Parker',
    publishedAt: '2025-07-01T10:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Business',
    readTime: 4,
  },
  {
    id: '8',
    title: 'Archaeologists Uncover Ancient City in Amazon Rainforest',
    summary: 'Advanced civilization discovered using new LiDAR technology challenges historical understanding of pre-Columbian societies.',
    content: `An international team of archaeologists has announced the discovery of a vast ancient urban complex hidden beneath the Amazon rainforest, challenging long-held beliefs about pre-Columbian civilization in South America. The site, estimated to be approximately 1,500 years old, was revealed using advanced LiDAR (Light Detection and Ranging) technology that can penetrate dense vegetation.

The urban complex, located in the Bolivian Amazon, covers an area of roughly 30 square kilometers and includes elaborate water management systems, ceremonial structures, and a network of raised causeways connecting various settlements. Researchers estimate it could have supported a population of 40,000 to 50,000 people.

"This discovery completely transforms our understanding of Amazonian societies," said Dr. Carlos Mendoza, lead archaeologist on the project. "The scale and sophistication of this urban planning demonstrates that the Amazon supported complex civilizations comparable to those of the Maya or Inca."

The city features a precise geometric layout oriented to astronomical alignments, suggesting advanced knowledge of mathematics and astronomy. Particularly impressive is an extensive hydraulic system that managed seasonal flooding through canals, reservoirs, and raised fields—engineering that allowed for intensive agriculture in a challenging environment.

Artifacts recovered from initial excavations include intricate ceramics, stone tools, and gold ornaments showing sophisticated craftsmanship. Carbon dating places the peak occupation between 500 and 700 CE, with evidence of continuous habitation for over 1,000 years.

The findings contradict the long-standing view that the Amazon could only support small, nomadic groups due to poor soil quality and environmental constraints. Instead, it appears these ancient societies actively modified their environment to create sustainable agricultural systems.

"This is just the beginning," noted Dr. Sophia Williams, a paleoecologist involved in the research. "We've surveyed less than 10% of the potential archaeological zones identified by satellite imagery. The Amazon likely holds many more lost cities."`,
    author: 'Miguel Rodriguez',
    publishedAt: '2025-06-30T09:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1590177600463-2c2a3fb3c726?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Science',
    readTime: 6,
  }
];

export const categories = [
  'All',
  'Technology',
  'Health',
  'Business',
  'Science',
  'Environment',
  'Finance',
];