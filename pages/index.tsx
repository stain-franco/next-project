import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-blue-700 transform skew-y-4 bg-gradient-to-b from-transparent to-blue-700">
          <section className="my-20 py-20 bg-gray-100 transform skew-y-8">
            <div className="flex justify-evenly items-center flex-wrap gap-10 transform skew-y-4">
              <div className="w-40 h-40">IMAGE</div>
              <div className="w-80">
                <h2 className="text-xl font-bold">
                  The most valuable investment you may ever make
                </h2>
                <p>
                  Resimex is a multidisciplinary firm offering bespoke residence
                  and citizenship solutions in Mexico. Whether it’s matching you
                  to your ideal investment, Golden Visa program or tax benefit,
                  we help investors successfully uproot their lives and
                  lifestyles.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
