import React, { useState } from 'react';
import { 
  Package, Heart, Truck, MapPin, PlusCircle, CheckCircle, 
  Search, ShieldCheck, Users, TrendingUp, Menu, X, ArrowRight,
  Phone, Mail, Globe, AlertCircle, Award, Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Mock initial listings
  const [listings, setListings] = useState([
    { id: 1, title: 'Картофель молодой (некондиция, мелкий)', farmer: 'КФХ «Зеленый луг» (Иван Петров)', volume: '150 кг', location: 'с. Михайловка (12 км)', status: 'Активно', category: 'Овощи', date: 'Сегодня, 10:30' },
    { id: 2, title: 'Яблоки свежие (излишки урожая)', farmer: 'ЛПХ Смирнова А.В.', volume: '80 кг', location: 'р.п. Октябрьский (5 км)', status: 'Активно', category: 'Фрукты', date: 'Сегодня, 09:15' },
    { id: 3, title: 'Молоко коровье цельное (свежее утро)', farmer: 'Семейная ферма «Ромашка»', volume: '30 л', location: 'с. Верховье (8 км)', status: 'Забронировано', category: 'Молочное', date: 'Вчера, 18:00' },
    { id: 4, title: 'Морковь грунтовая', farmer: 'КФХ «Агро-Село»', volume: '95 кг', location: 'с. Красное (15 км)', status: 'Активно', category: 'Овощи', date: 'Вчера, 14:20' }
  ]);

  // Form states
  const [newTitle, setNewTitle] = useState('');
  const [newVolume, setNewVolume] = useState('');
  const [newCategory, setNewCategory] = useState('Овощи');
  const [newFarmer, setNewFarmer] = useState('');
  const [newLocation, setNewLocation] = useState('');

  const handleAddListing = (e) => {
    e.preventDefault();
    if (!newTitle || !newVolume || !newFarmer) return;

    const newItem = {
      id: listings.length + 1,
      title: newTitle,
      farmer: newFarmer,
      volume: newVolume,
      location: newLocation || 'Сельское поселение',
      status: 'Активно',
      category: newCategory,
      date: 'Только что'
    };

    setListings([newItem, ...listings]);
    setNewTitle('');
    setNewVolume('');
    setNewFarmer('');
    setNewLocation('');
    setNotification('Объявление успешно опубликовано! Фермеру начислено +10 баллов в рейтинг эко-активистов.');
    setTimeout(() => setNotification(null), 5000);
    setActiveTab('recipient');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Top Banner / Notification */}
      {notification && (
        <div className="bg-green-600 text-white px-4 py-3 text-center text-sm font-medium flex items-center justify-center gap-2 shadow-md">
          <CheckCircle className="w-5 h-5" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-11 h-11 bg-green-700 rounded-xl flex items-center justify-center text-white shadow-md">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-900 block leading-tight">ДоброЕда</span>
              <span className="text-xs text-green-700 font-semibold uppercase tracking-wider">Сельский Фудшеринг</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => setActiveTab('home')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === 'home' ? 'bg-green-50 text-green-700' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveTab('farmer')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${activeTab === 'farmer' ? 'bg-green-50 text-green-700' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'}`}
            >
              <PlusCircle className="w-4 h-4" /> Я Фермер / Отдать
            </button>
            <button 
              onClick={() => setActiveTab('recipient')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${activeTab === 'recipient' ? 'bg-green-50 text-green-700' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'}`}
            >
              <Heart className="w-4 h-4" /> Получить продукты
            </button>
            <button 
              onClick={() => setActiveTab('volunteer')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${activeTab === 'volunteer' ? 'bg-green-50 text-green-700' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'}`}
            >
              <Truck className="w-4 h-4" /> Волонтерам
            </button>
            <button 
              onClick={() => setActiveTab('map')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${activeTab === 'map' ? 'bg-green-50 text-green-700' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'}`}
            >
              <MapPin className="w-4 h-4" /> Карта
            </button>
          </nav>

          {/* Action button */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('farmer')} 
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow transition transform active:scale-95"
            >
              Разместить излишки
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-stone-700">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100">Главная</button>
            <button onClick={() => { setActiveTab('farmer'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100">Я Фермер / Отдать</button>
            <button onClick={() => { setActiveTab('recipient'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100">Получить продукты</button>
            <button onClick={() => { setActiveTab('volunteer'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100">Волонтерам</button>
            <button onClick={() => { setActiveTab('map'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg font-medium text-stone-700 hover:bg-stone-100">Интерактивная карта</button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative bg-stone-900 text-white overflow-hidden py-24 lg:py-32">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-900/80 text-green-300 border border-green-700 mb-6">
                    <ShieldCheck className="w-4 h-4" /> Социальный проект · АПК & Экология
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                    Помогите свежей едой, <span className="text-green-400">а не отходами на полях</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-stone-300 mb-8 leading-relaxed">
                    Платформа прямого фудшеринга в сельской местности. Связываем фермеров и ЛПХ, у которых есть излишки урожая или некондиция, с многодетными семьями, пенсионерами и социальными учреждениями.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setActiveTab('farmer')}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition flex items-center justify-center gap-2"
                    >
                      Отдать излишки урожая <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setActiveTab('recipient')}
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold backdrop-blur transition flex items-center justify-center"
                    >
                      Найти продукты
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Counters / Stats */}
            <section className="bg-green-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-green-300 mb-2">5.4 т</div>
                  <div className="text-sm text-green-100 font-medium">Спасено продуктов от утилизации</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-green-300 mb-2">1,240</div>
                  <div className="text-sm text-green-100 font-medium">Семей получили помощь</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-green-300 mb-2">68</div>
                  <div className="text-sm text-green-100 font-medium">Фермеров и ЛПХ в системе</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-green-300 mb-2">14</div>
                  <div className="text-sm text-green-100 font-medium">Сельских поселений охвачено</div>
                </div>
              </div>
            </section>

            {/* How it works */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">Как устроен сельский фудшеринг</h2>
                <p className="text-stone-600">Простая цепочка из трех шагов для решения проблемы продовольственных потерь на селе.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 relative">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
                  <h3 className="text-xl font-bold mb-3 text-stone-900">Фермер публикует излишки</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Если остались овощи нестандартной формы или излишки молока, фермер создает быструю карточку за 1 минуту через телефон.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 relative">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
                  <h3 className="text-xl font-bold mb-3 text-stone-900">Система находит получателя</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Алгоритм и геолокация подбирают ближайшую семью в трудной жизненной ситуации или социальный приют/детский дом.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 relative">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold text-xl mb-6">3</div>
                  <h3 className="text-xl font-bold mb-3 text-stone-900">Доставка или самовывоз</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Местные волонтеры координируют передачу свежих продуктов без финансовых затрат и утилизационных убытков.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* FARMER / DONOR TAB */}
        {activeTab === 'farmer' && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-stone-900">Кабинет фермера / донора</h1>
                  <p className="text-sm text-stone-600">Разместите информацию об излишках продукции или некондиции</p>
                </div>
              </div>

              <form onSubmit={handleAddListing} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Название продукции (что отдаете)</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Например: Картофель столовый (мелкий фракция 3-5 см)" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Категория</label>
                    <select 
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                    >
                      <option value="Овощи">Овощи</option>
                      <option value="Фрукты">Фрукты</option>
                      <option value="Молочное">Молочные продукты</option>
                      <option value="Зерно/Крупы">Зерновые и крупы</option>
                      <option value="Прочее">Прочее</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Объем / Вес</label>
                    <input 
                      type="text" 
                      value={newVolume}
                      onChange={(e) => setNewVolume(e.target.value)}
                      placeholder="Например: 100 кг или 50 л" 
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Ваше КФХ / ФИО</label>
                    <input 
                      type="text" 
                      value={newFarmer}
                      onChange={(e) => setNewFarmer(e.target.value)}
                      placeholder="Например: КФХ «Заря» (Иванов И.И.)" 
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Населенный пункт / Адрес</label>
                    <input 
                      type="text" 
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="Например: с. Сосновка (10 км от районного центра)" 
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-green-800 leading-relaxed">
                    Передавая излишки через платформу «ДоброЕда», вы освобождаетесь от затрат на утилизацию и можете претендовать на региональные программы поддержки социально ответственных производителей АПК.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold shadow-md transition"
                >
                  Опубликовать объявление о передаче
                </button>
              </form>
            </div>
          </div>
        )}

        {/* RECIPIENT TAB */}
        {activeTab === 'recipient' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-stone-900">Доступная продукция (Витрина фудшеринга)</h1>
                <p className="text-stone-600">Свежие продукты от местных фермеров для нуждающихся граждан и соц. учреждений</p>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-sm">
                <Search className="w-5 h-5 text-stone-400" />
                <input type="text" placeholder="Поиск по продуктам..." className="border-none focus:outline-none text-sm w-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {listings.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        {item.category}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${item.status === 'Активно' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-stone-900 mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm font-medium text-green-700 mb-1">{item.volume}</p>
                    <p className="text-xs text-stone-500 mb-3">{item.farmer}</p>
                    <div className="flex items-center gap-1.5 text-xs text-stone-600 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <button 
                    disabled={item.status === 'Забронировано'}
                    onClick={() => {
                      setListings(listings.map(l => l.id === item.id ? {...l, status: 'Забронировано'} : l));
                      setNotification(`Продукт "${item.title}" успешно забронирован! Волонтер свяжется с вами для координации выдачи.`);
                      setTimeout(() => setNotification(null), 5000);
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition ${item.status === 'Забронировано' ? 'bg-stone-100 text-stone-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800 text-white shadow'}`}
                  >
                    {item.status === 'Забронировано' ? 'Забронировано' : 'Забронировать'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOLUNTEER TAB */}
        {activeTab === 'volunteer' && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-stone-900">Координация волонтеров и логистики</h1>
                  <p className="text-sm text-stone-600">Помогите доставить свежие фермерские продукты от поля до стола нуждающихся</p>
                </div>
              </div>
              <p className="text-stone-700 leading-relaxed mb-6">
                В сельской местности главная сложность — оперативно перевезти небольшой объем овощей или молочной продукции. Если у вас есть личный автомобиль и желание помочь — выберите задачу на интерактивной карте или свяжитесь с местным координатором.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Активные задачи</div>
                  <div className="text-3xl font-extrabold text-green-700">6 маршрутов</div>
                </div>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Свободные волонтеры</div>
                  <div className="text-3xl font-extrabold text-green-700">18 человек</div>
                </div>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Среднее плечо доставки</div>
                  <div className="text-3xl font-extrabold text-green-700">8.4 км</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MAP TAB */}
        {activeTab === 'map' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-stone-900 mb-2">Интерактивная карта проекта</h1>
              <p className="text-stone-600">Расположение фермерских хозяйств, пунктов выдачи и социальных получателей в районе</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
              <div className="bg-stone-100 h-96 rounded-xl border border-stone-300 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#15803d_2px,transparent_2px)] [background-size:24px_24px]"></div>
                <MapPin className="w-16 h-16 text-green-700 animate-bounce mb-4" />
                <h3 className="text-xl font-bold text-stone-800 mb-2">Интерактивный картографический модуль</h3>
                <p className="text-sm text-stone-600 max-w-md text-center px-4">
                  На реальном развертывании здесь отображается Яндекс/OpenStreetMap с геометками фермеров (зеленые), складов волонтеров (желтые) и детских домов/приютов (синие).
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-green-700 rounded-lg flex items-center justify-center text-white">
                <Package className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">ДоброЕда</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Социальная IT-платформа для развития фудшеринга в сельской местности и малых городах России.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition">Главная</button></li>
              <li><button onClick={() => setActiveTab('farmer')} className="hover:text-white transition">Фермерам и донорам</button></li>
              <li><button onClick={() => setActiveTab('recipient')} className="hover:text-white transition">Получить продукты</button></li>
              <li><button onClick={() => setActiveTab('volunteer')} className="hover:text-white transition">Волонтерская сеть</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Госпрограммы</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Комплексное развитие сельских территорий</li>
              <li className="hover:text-white transition">Нацпроект «Экология» (Экономика замкнутого цикла)</li>
              <li className="hover:text-white transition">Развитие волонтерства и НКО</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Контакты проекта</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-green-500" /> 8 (800) 555-35-35</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-green-500" /> support@dobro-eda-village.ru</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-green-500" /> www.dobro-eda-village.ru</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          © 2026 Проект «Сельский Фудшеринг — ДоброЕда». Все права защищены.
        </div>
      </footer>
    </div>
  );
}
