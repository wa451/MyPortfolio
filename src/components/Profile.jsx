import React from 'react';

const Profile = ({ profile }) => {
  return (
    <section id="about" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
          <img src="src/assets/profile.jpg" alt="プロフィール写真" className="w-full h-full object-cover" />
        </div> */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
          <p className="text-xl text-gray-600 mb-4">{profile.title}</p>
          <div className="prose max-w-none">
            <p className="mb-4">
              私はReactとTypeScriptを専門とするフロントエンドエンジニアです。使いやすく高速なウェブアプリケーションの開発に情熱を持っています。
              ユーザー体験を最優先に考え、クリーンで保守性の高いコードを書くことを心がけています。
            </p>
            <p>
              現在はエンジニアとしてのキャリアをスタートさせるべく、自分のスキルを活かせる環境を探しています。
              チームでの協力を大切にし、新しい技術を学ぶことに意欲的です。
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
              GitHub
            </a>
            {/* <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
              LinkedIn
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
