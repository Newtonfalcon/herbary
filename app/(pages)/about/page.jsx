"use client"
import React from 'react';
import { Leaf, Heart, Shield, Award, Users, Target, Sparkles, Phone, CheckCircle, TrendingUp } from 'lucide-react';

export default function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your wellness journey is our priority. We're committed to providing personalized care and support every step of the way."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We source only the finest organic and natural ingredients, rigorously tested to ensure purity and potency."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We practice ethical sourcing and sustainable harvesting to protect our planet for future generations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every product we create and every customer interaction we have."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Herbary was founded with a vision to make premium herbal wellness accessible to everyone in Nigeria."
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Expanded our product line to over 26 premium blends, teas, and wellness formulations."
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Served over 10,000 satisfied customers and built a thriving wellness community."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Launched custom formulation services and personalized wellness consultations."
    }
  ];

  const team = [
    {
      role: "Herbalists",
      description: "Expert practitioners with decades of combined experience in traditional herbal medicine"
    },
    {
      role: "Wellness Advisors",
      description: "Certified professionals dedicated to guiding you on your health journey"
    },
    {
      role: "Quality Control",
      description: "Meticulous testing and verification to ensure every product meets our high standards"
    },
    {
      role: "Customer Care",
      description: "Friendly, knowledgeable support team ready to assist with all your needs"
    }
  ];

  const handleContactUs = () => {
    const whatsappNumber = '1550';
    const message = encodeURIComponent('Hello Herbary! I would like to learn more about your company and products.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Leaf className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Leaf className="w-40 h-40" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-6">
              <Leaf className="w-12 h-12 mr-3" />
              <span className="text-2xl font-bold">About Herbary</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nurturing Wellness Through Nature
            </h1>
            <p className="text-xl md:text-2xl text-green-50">
              Your trusted partner in holistic health and natural healing since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Herbary, we believe true wellness begins with nature. Our mission is simple: to reconnect you with the healing power of plants through premium herbal supplements and natural health products that support your journey to a vibrant, balanced life.
                </p>

                  <img  src={"/logo.png" } alt='logo' className='w-80 h-80 border-green-50 py-5 rounded-xl bg-green-50 flex  text-center items-center mx-auto'/>
                <p>
                
                  Born out of a passion for holistic health and powered by trusted brands Herbary is your one-stop online hub for quality supplements rooted in tradition and backed by modern science. Whether you’re looking to boost your energy, support immunity, or elevate daily vitality, we’re here with solutions that are as pure as they are effective.
                  
                  </p>
                <p>
                  Every product we carry is carefully chosen to help you heal naturally and live fully. Because your health isn’t just a goal, it’s a lifestyle.

                    Welcome to Herbary. Where nature nurtures you.
                  
                  </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-full p-3 flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To empower individuals with natural, effective wellness solutions that enhance quality of life and promote holistic health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-full p-3 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To become Nigeria's leading herbal wellness brand, recognized for exceptional quality, innovation, and customer care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-full p-3 flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Promise</h3>
                    <p className="text-gray-600">
                      To deliver products of uncompromising quality and provide personalized support on every customer's wellness journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Herbary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-2 border-transparent hover:border-green-500 group"
                >
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that have shaped Herbary into what it is today
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-green-600 text-white rounded-xl px-6 py-4 font-bold text-2xl flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600 hidden lg:block flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-4 flex-shrink-0">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.role}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Herbary?
              </h2>
              <p className="text-xl text-green-50">
                We're more than just an herbal products company
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Premium Quality Products</h3>
                  <p className="text-green-50">100% natural, organic ingredients tested for purity</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Expert Guidance</h3>
                  <p className="text-green-50">Professional wellness advisors at your service</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Proven Results</h3>
                  <p className="text-green-50">Thousands of satisfied customers across Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Personalized Care</h3>
                  <p className="text-green-50">Custom formulations tailored to your unique needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Fast Delivery</h3>
                  <p className="text-green-50">Quick and reliable service nationwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Community Support</h3>
                  <p className="text-green-50">Join our thriving wellness community</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleContactUs}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Start Your Wellness Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience the Herbary Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who have transformed their wellness journey with our premium herbal products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactUs}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us Today
            </button>
            <button
              onClick={() => window.location.href = '#products'}
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Leaf className="w-5 h-5" />
              View Our Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}