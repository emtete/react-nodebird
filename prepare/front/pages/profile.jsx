import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NordBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
