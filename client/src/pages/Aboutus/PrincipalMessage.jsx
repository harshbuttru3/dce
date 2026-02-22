import React from "react";

const PrincipalMessage = () => {
  return (
    <div className="py-12 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Principal's Message
        </h1>

        {/* Primary Divider */}
        <hr className="h-1 bg-primary border-none w-24 mx-auto mb-10" />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Image Section */}
          <div className="md:w-1/3 w-full flex justify-center">
            <img
              src="/chandan-sir.jpeg"   // 🔁 Replace with your image path
              alt="Principal"
              className="rounded-lg shadow-lg w-64 md:w-80 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 w-full space-y-5 text-lg leading-relaxed">
            <p>
              It is a privilege and honour for me to have led DCE Darbhanga as
              a Principal of the Institution. DCE has a rich legacy of more than
              15 dedicated years of service to the nation and it is the pride of
              Bihar. DCE Darbhanga takes extreme pride in the fact that it has
              been occupying a unique position in imparting technological
              education to the youth.
            </p>

            <p>
              We believe education is a means to translate a human being into a
              social human being, and in order to meet this we are working on
              the holistic development of students. The institute is committed
              to provide quality technical education with a mission to develop
              human resource with excellence in technical skill, creativity,
              critical thinking with high moral and ethical values.
            </p>

            <p>
              The Institute emphasizes the need to promote entrepreneurship by
              introducing an entrepreneurial spirit and providing support to
              start-ups. It is fast emerging as a knowledge centre for quality
              teaching and usable research through inter-disciplinary,
              innovative and dynamic approaches.
            </p>

            <p>
              The Institute aims to develop the latest technical skills and
              competencies supported by different learning frameworks for our
              students. On behalf of all stakeholders, I would like to request
              everyone to work on converged ideas to achieve the most deserved
              position in technical education.
            </p>

            <p>
              DCE will contribute significantly in different flagship programs
              of our country like Make in India, Start up India, and Standup
              India.
            </p>

            <p className="font-semibold">
              Dear students, Dream, Dedication, Discipline and Determination
              will make you successful in your career and life. Create history,
              make your parents, teachers, society and this country proud.
            </p>

            {/* Signature */}
            <div className="mt-6 pt-4 border-t border-primary">
              <p className="font-bold">With Regards,</p>
              <p className="font-semibold">Prof. (Dr.) Chandan Kumar</p>
              <p>Email Id: dcedbg@rediffmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrincipalMessage;
