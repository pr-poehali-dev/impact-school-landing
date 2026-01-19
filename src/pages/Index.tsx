import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", company: "", message: "" });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Преемственность без конфликтов: Как передать бизнес и сохранить результат
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Помогаем собственникам выстроить систему управления, которая работает без вашего постоянного участия
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Записаться на диагностику
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            С какими проблемами вы сталкиваетесь?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "AlertCircle",
                title: "Бизнес зависит от вас",
                description: "Без вашего участия процессы останавливаются, команда не может принимать решения самостоятельно"
              },
              {
                icon: "Users",
                title: "Нет преемника",
                description: "Вы не знаете, кому передать бизнес, или есть кандидаты, но они не готовы к управлению"
              },
              {
                icon: "TrendingDown",
                title: "Риск потери ценности",
                description: "Переход управления может привести к потере клиентов, команды и финансовых результатов"
              },
              {
                icon: "Clock",
                title: "Нет времени на стратегию",
                description: "Вы погружены в операционку и не можете сосредоточиться на развитии компании"
              },
              {
                icon: "Target",
                title: "Конфликты интересов",
                description: "Разногласия между наследниками или партнерами о будущем компании"
              },
              {
                icon: "Shield",
                title: "Отсутствие системы",
                description: "Нет четких процессов, документации и стандартов работы для передачи управления"
              }
            ].map((problem, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-primary animate-scale-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={problem.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-secondary">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6 text-secondary">
              Наше решение
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Мы разрабатываем индивидуальную программу преемственности и сопровождаем вас на каждом этапе перехода
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-secondary">
                  Разработка программы преемственности
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Анализ текущей системы управления и выявление рисков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Определение ключевых позиций и требований к преемникам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Разработка индивидуального плана передачи управления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Создание системы оценки и развития кандидатов</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon name="HandHelping" size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-secondary">
                  Сопровождение перехода
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Подготовка собственника к роли стратегического контролера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Обучение и менторинг преемников</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Внедрение систем управленческого контроля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Поддержка на всех этапах трансформации</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Этапы работы
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                icon: "Search",
                title: "Диагностика",
                description: "Проводим глубокий анализ вашей компании, оцениваем готовность к передаче управления и выявляем ключевые риски"
              },
              {
                number: "02",
                icon: "ClipboardList",
                title: "Разработка стратегии",
                description: "Создаем индивидуальный план преемственности с учетом специфики вашего бизнеса и личных целей"
              },
              {
                number: "03",
                icon: "UserCheck",
                title: "Подготовка команды",
                description: "Работаем с преемниками, развиваем необходимые компетенции и готовим к новым ролям"
              },
              {
                number: "04",
                icon: "Settings",
                title: "Внедрение систем",
                description: "Создаем процессы, регламенты и системы управленческого контроля для бесперебойной работы"
              },
              {
                number: "05",
                icon: "TrendingUp",
                title: "Переход и контроль",
                description: "Сопровождаем процесс передачи полномочий и обеспечиваем сохранение результатов бизнеса"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 mb-8 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name={step.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2 text-secondary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
            Отзывы наших клиентов
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Более 50 компаний успешно прошли через программу преемственности
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей Морозов",
                position: "Собственник производственной компании",
                company: "Оборот 800 млн ₽",
                text: "За 8 месяцев работы с IMPACT SCHOOL мы создали систему управления, которая позволила мне сфокусироваться на стратегии. Теперь бизнес растет на 30% в год без моего постоянного участия в операционке.",
                rating: 5
              },
              {
                name: "Ирина Соколова",
                position: "CEO сети медицинских клиник",
                company: "15 филиалов",
                text: "Благодаря программе преемственности я подготовила управляющих для каждого филиала. Качество услуг не просело, а выручка выросла на 22%. Команда работает самостоятельно.",
                rating: 5
              },
              {
                name: "Дмитрий Волков",
                position: "Основатель IT-компании",
                company: "Команда 120 человек",
                text: "Передача управления сыну казалась невозможной задачей. С помощью экспертов IMPACT SCHOOL мы выстроили плавный переход за год. Бизнес сохранил все ключевые клиенты и показатели.",
                rating: 5
              }
            ].map((review, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-1 italic">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-heading font-semibold text-secondary">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {review.position}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    {review.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/424bf2b2-b4ea-4ddc-a6f7-9008fda5e94b/files/0a31b65d-ffe3-4f25-9fd1-0fd02d6ad516.jpg"
              alt="Эксперт IMPACT SCHOOL"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover"
            />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Работайте с экспертами
            </h2>
            <p className="text-lg text-white/90">
              Более 15 лет опыта в консалтинге для крупного и среднего бизнеса. Мы помогли десяткам компаний успешно пройти через трансформацию управления.
            </p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-secondary">
              Запишитесь на диагностику
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами для обсуждения вашей ситуации
            </p>
            
            <Card className="p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">
                    Ваше имя *
                  </label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">
                    Телефон *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">
                    Компания
                  </label>
                  <Input
                    placeholder="ООО «Название компании»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">
                    Комментарий
                  </label>
                  <Textarea
                    placeholder="Расскажите кратко о вашей ситуации..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold"
                  size="lg"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">IMPACT SCHOOL</h3>
              <p className="text-white/80 text-sm">
                Консалтинговая компания по развитию бизнеса и преемственности управления
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@impactschool.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Программы преемственности</li>
                <li>Консалтинг для собственников</li>
                <li>Развитие управленческих команд</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 IMPACT SCHOOL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;