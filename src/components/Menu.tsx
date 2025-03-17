import { Utensils } from echo "# Littile_Lemon" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ipraveen27/Littile_Lemon.git
git push -u origin main;

const menuItems = [
  {
    category: 'Starters',
    items: [
      { name: 'Mediterranean Mezze Platter', price: 16, description: 'Hummus, baba ganoush, tzatziki, olives, and pita bread' },
      { name: 'Grilled Halloumi', price: 14, description: 'Cypriot cheese with honey and za\'atar' },
      { name: 'Calamari Fritti', price: 15, description: 'Crispy squid with lemon aioli' }
    ]
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Grilled Sea Bass', price: 32, description: 'Fresh Mediterranean sea bass with herbs and lemon' },
      { name: 'Lamb Moussaka', price: 28, description: 'Traditional Greek casserole with layers of eggplant and spiced lamb' },
      { name: 'Vegetable Tagine', price: 24, description: 'Moroccan-style stewed vegetables with couscous' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Baklava', price: 10, description: 'Layered phyllo pastry with nuts and honey' },
      { name: 'Orange Blossom Panna Cotta', price: 12, description: 'Italian cream dessert with citrus notes' },
      { name: 'Turkish Delight', price: 8, description: 'Assorted flavors of traditional lokum' }
    ]
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Utensils className="text-green-600" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">Our Menu</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Savor the authentic flavors of the Mediterranean
          </p>
        </div>

        <div className="space-y-12">
          {menuItems.map((section) => (
            <div key={section.category} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-green-600 font-semibold">${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}