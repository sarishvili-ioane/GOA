import React from 'react';

const Features = () => {
  return (
    <section id="courses" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-2xl font-semibold mb-2">Expert Instructors</h3>
          <p>Learn from professionals who are passionate about teaching.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-2xl font-semibold mb-2">Interactive Courses</h3>
          <p>Engaging content designed for interactive learning experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-2xl font-semibold mb-2">Flexible Learning</h3>
          <p>Access courses anytime, anywhere and learn at your own pace.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;