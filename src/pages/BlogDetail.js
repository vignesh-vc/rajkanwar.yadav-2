import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Thyroid from "../assests/thyroid.jpg"
import Diabetes from "../assests/Diabetes.jpg";
import Asthma  from "../assests/Asthma.webp"
const blogs = [
  {
    id: 1,
    tag: "All About Asthma",
    title: "All About Asthma",
    date: "April 5, 2025",
    img: Asthma,
    htmlContent: `
       <h1 class="text-xl font-semibold mt-6 mb-2"><strong>Asthma and its symptoms</strong> </h1>
     <p>Asthma is a long-term illness that affects the lungs' airways. The airways swell as the condition progresses due to a lack of oxygen. As a result, they become hypersensitive to certain substances that people inhale. Chest tightness, wheezing, breathlessness, and coughing are all common symptoms.</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Diagnosis</h2>
     <p>Doctors use a physical exam, medical history, and a variety of tests, including pulmonary function tests, to confirm an asthma diagnosis and rule out other conditions that may appear similar, such as seasonal allergies and chronic obstructive pulmonary disease (COPD). A patient's asthma severity will most likely be classified into one of four categories based on their symptoms.</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Types of Asthma</h2>
      <p>Asthma can be classified into two types based on its cause and characteristics:</p>
      <ul class="list-disc ml-5">
        <li><strong>Intrinsic asthma</strong> – is caused by allergens such as pollen, mites, dust, tobacco smoke, and so on, whereas intrinsic asthma is caused by a respiratory tract infection. Extrinsic asthma, which usually begins in childhood, is far more common than intrinsic asthma, which affects only a small percentage of the population after the age of 30. </li>
        <li><strong>Extrinsic asthma</strong> – on the other hand, is more difficult to treat due to obesity as one of the main risk factors and chronic symptoms.

After a series of tests and consideration of the patient's entire medical history, asthma allergy is diagnosed. A physical exam is performed after the inquiry, followed by lung function tests to confirm asthma.

</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">Nocturnal asthma</h2>
     <p>It is one of the asthma types in which people with asthma find it difficult to cope at night, and they experience symptoms such as wheezing and shortness of breath, which disrupt their sleep. These symptoms are common in people who have uncontrolled asthma. As per experts, the circadian rhythm is to blame. In addition, excessive humidity, a dirty pillowcase, a large meal before bed, undiagnosed sleep apnea, and other factors can trigger nocturnal asthma.</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Asthma and food allergies</h2>
     <p>Certain foods should be avoided by asthma patients because they may aggravate their symptoms. Food allergies and asthma can make life difficult for you. A food allergy is defined as an overreaction of the body's immune system to certain harmless proteins, resulting in the release of a chemical called histamine. Hives, rash, nausea, vomiting, and diarrhea are all signs that someone has developed a food allergy. Food allergies are commonly associated with foods such as eggs, milk, peanuts, tree nuts (cashews, almonds, filberts, etc.), soy, wheat, fish, shellfish, and shrimp. Food allergies and asthma attacks can be avoided by avoiding these foods.Asthmatic patients should avoid foods containing omega-6 fatty acids and trans-fats because they aggravate asthma symptoms. Processed foods, as well as some types of margarine, must be avoided.</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Asthma-relieving exercises</h2>
    <p>Physical activities are thought to aggravate asthma allergies, but this is incorrect. However, some exercises can be extremely beneficial for asthma sufferers. Swimming and other swimming-related exercises help to strengthen the breathing muscles. It also improves lung function and cardiovascular fitness. Yoga is another excellent exercise for asthma sufferers. In addition, asthma patients can maintain their fitness regimen by walking, biking, hiking, golfing, gymnastics, and other physical activities. 

</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Treatment with natural ingredients</h2>
   <p>There is no natural treatment for asthma. Natural therapies, on the other hand, can treat the majority of its symptoms. Going for relaxation therapies such as deep abdominal breathing, progressive muscle relaxation, guided imagery, and biofeedback can also help if you're having an asthma attack due to emotional stress. A healthy diet is unquestionably beneficial in reducing asthma symptoms. Salmon, mackerel, and cod, which are high in omega-3 fatty acids, must also be included in the diet.</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Other management options</h2>
 <p>Inhaling vaporized medications through a device called an inhaler is a necessary part of most people's asthma management. These drugs may help to reduce inflammation, dilate (open) the airways, and cause other positive changes. Long-acting drugs are used to manage symptoms over time, while fast-acting drugs are used to provide immediate relief during asthma attacks. Lifestyle changes and medical management of the associated disease or presenting illness can also benefit.</p>   `
  },
  {
    id: 2,
    tag: "Living life with diabetes",
    title: "Living life with diabetes",
    date: "April 3, 2025",
    img:Diabetes,
    htmlContent: `
    <h1 class="text-xl font-semibold mt-6 mb-2"><strong>Living life with diabetes</strong> </h1>
      <p>Living life can be worrisome if you have diabetes, but hey, everything can be managed with the right steps! That’s why we are here with 4 key points that will help you lead a better life.</p>
      <ul class="list-disc ml-5">
        <li>Learn about diabetes.</li>
        <li>Know your diabetes ABCs.</li>
        <li>Learn how to live with diabetes.</li>
        <li>Get routine care to stay healthy.</li>
      </ul>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">What is diabetes</h2>
      <p>Diabetes is a disease in which your body is unable to properly utilize the energy provided by the food you eat. There are different types of diabetes, some of which are more prevalent than others:</p>
      <ul class="list-disc ml-5">
        <li>Type 1 diabetes</li>
        <li>Type 2 diabetes</li>
        <li>Gestational diabetes</li>
      </ul>
     <p>Children are more likely to develop type 1 diabetes, and gestational diabetes is a type of diabetes that can develop during pregnancy.</p>
     <p>Type 2 diabetes is the most common type of diabetes in the general population, and it often develops from pre-diabetes.</p>
     <p>When your blood glucose levels are high but not high enough to be diagnosed as diabetes, it is identified as prediabetes. If you have prediabetes, you may already be experiencing the long-term effects of diabetes on your heart, blood vessels, and kidneys.

</p>
      <h2 class="text-xl font-semibold mt-6 mb-2">ABCs of diabetes</h2>
      <ul class="list-disc ml-5">
        <li><strong>A</strong> for the A1C test – Your average level of your blood sugar level over time. You don't want those to rise too high. High blood sugar levels can be harmful to your heart, blood vessels, kidneys, feet, and eyes.</li>
        <li><strong>B</strong> for blood pressure – When your blood pressure rises too high, your heart has to work too hard. It can cause a heart attack, stroke, and kidney and eye damage.</li>
        <li><strong>C</strong> for cholesterol –LDL and HDL cholesterol are the two types of cholesterol in your blood.</li>
        <p>LDL cholesterol, also known as "bad" cholesterol, can accumulate and clog your blood vessels. It has the potential to cause a heart attack or stroke.</p>
      </ul>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">HDL or good cholesterol</h2>
      <p>HDL or “good” cholesterol assists in the removal of “bad” cholesterol from your blood vessels.</p>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">Lead a healthy life with diabetes</h2>
     <p>Adopting a healthy lifestyle can aid in diabetes management. It may also help with key health indicators like weight, blood sugar, blood pressure, and cholesterol.<p/>
      <h3 class="text-lg font-medium mt-4 mb-1">Weight management</h3>
     <p>Type 2 diabetes is difficult to manage if you are overweight or obese. It also raises the risk of high blood cholesterol and blood pressure, which can lead to a variety of cardiovascular problems. Thus, weight loss is recommended. </p>
    
     <h3 class="text-lg font-medium mt-4 mb-1">Healthy diet</h3>
     <p>Healthy eating habits, such as portion control and reading food labels, are essential for maintaining a healthy weight and preventing or managing diabetes.</p>
     <p>You have additional food issues if you have prediabetes or diabetes. Simple carbohydrates found in foods like table sugar, cake, soda, candy, and jellies, for example, should be avoided. They can raise blood glucose levels if consumed.</p>
   
      <h3 class="text-lg font-medium mt-4 mb-1">Maintain a food and blood glucose log</h3>
     <p>You can keep a better track of how foods affect your body by writing down what you eat when you eat it, and how it affects your glucose levels. To see how your body reacts to different foods, check your blood sugar one hour to one and a half hours after eating.</p>
    
       <h3 class="text-lg font-medium mt-4 mb-1">Managing a busy lifestyle</h3>
     <p>Many of us are always on the go and rarely spend time at home. Even if your kitchen isn't suitable, eating well should always be a priority.</p>
     <p>You can properly nourish your body wherever life takes you with a little forethought. Keep these pointers in mind when eating on the go:</p>
     <p>Bring snacks and healthy lunch to eat throughout the day. This will make it easier for you to stick to healthy food choices and resist the temptation to eat unhealthy foods that are more convenient.</p>
<p>Reduce your caffeine consumption and drink plenty of water. Keep a bottle of water on you at all times so you can stay hydrated.</p>     
     
      <h3 class="text-lg font-medium mt-4 mb-1">Being physically active</h3>
   <p>Losing 7% of your body weight and being physically active for at least 30 minutes a day can cut your risk of diabetes in half. And as you lose more weight, your risk decreases even more. If you already have diabetes, physical activity and weight management can help you manage the disease and avoid negative health consequences.</p> 

   <h2 class="text-xl font-semibold mt-6 mb-2">Avoid smoking</h2>
      <p>Cigarette smoking is the leading preventable cause of death. It's also the leading cause of premature death that can be changed.</p>
      <p>Smoking is even more dangerous if you have diabetes because:</p>
      <ul class="list-disc ml-5">
        <li>Nerve damage and kidney disease are more likely to occur</li>
        <li>Smokers are three times more likely than non-smokers to die of heart disease</li>
        <li>Smoke is more likely to raise blood sugar levels, making diabetes management more difficult.</li>
      </ul>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">Stress management</h2>
      <p>People are affected by stress in various ways. It has the potential to affect one's emotional well-being:</p>
      <ul class="list-disc ml-5">
        <li>From headaches to stomach-aches, it can cause a variety of aches and pains</li>
        <li>Reduce the amount of energy you have</li>
        <li>Disrupts sleep</li>
        <li>Overeating, drinking too much alcohol, smoking, procrastinating, and not getting enough sleep are all unhealthy responses.</li>
        <li>Counting carbohydrates</li>
        <li>Eating foods with a low glycemic index</li>
      </ul>
  
      <p class="mt-6 font-semibold text-red-600">Get regular health check-ups</p>
      <p>Consult with our health care team at least twice a year to detect and treat any problems as early as possible.</p>
    `
  }, {
    id: 3,
    tag: "Thyroid: Myths and Facts",
    title: "Thyroid: Myths and Facts",
    date: "April 1, 2025",
    img: Thyroid,
    htmlContent: `
    <h1 class="text-xl font-semibold mt-6 mb-2"><strong>Thyroid self-assessment</strong> </h1>
      <p>Early detection is critical for successfully treating any thyroid problem. To assist with this, perform a self-exam known as the "neck check." Looking into a mirror, extending your neck, and gently turning your head slightly left and then right can help you detect a lump or enlargement. 

You may have a lump or goiter if the surface of your neck below your Adam's apple and above your collar bone is uneven or protruding even slightly. You should see an endocrinologist right away.

To get thyroid treatment or learn more about thyroid management, contact our endocrinologist.</p>

 <h1 class="text-xl font-semibold mt-6 mb-2">Fact Sheet</h1>
      <h2 class="text-xl font-semibold mt-6 mb-2">Myth 1: Your symptoms will go away right away if you start taking thyroid medication</h2>
      <p><strong>Fact:</strong> It takes time for thyroid levels to return to normal. Few people take medication for months before they start feeling better.</p>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">Myth 2: People with thyroid conditions should continue to take medication throughout their lives.</h2>
      <p><strong>Fact:</strong>  It is dependent on the cause of your condition. Thyroid issues can occur during or after pregnancy for some women. The thyroid may adjust itself once the body's hormones have stabilized. Also, prescriptions may change over time. At times, individuals with an underactive thyroid may require additional thyroid hormones during pregnancy.</p>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">Myth 3:  It's okay to skip medicine if your symptoms aren't bothering you.</h2>
      <p><strong>Fact:</strong>  The thyroid hormone is in charge of many vital organ functions. Failure to treat even a mild case of thyroid disease can result in serious health issues such as heart disease, weak bones (osteoporosis), and/or inability to have children (infertility).</p>
  
      <h2 class="text-xl font-semibold mt-6 mb-2">Myth 4:  I can stop taking my medications once I feel better and my lab results are normal.</h2>
      <p><strong>Fact:</strong>  Regardless of how well you feel, it is critical that you continue to take your medications on a regular basis. Leave the decision to change or discontinue medication to an endocrinologist.

 </p>
      <h2 class="text-xl font-semibold mt-6 mb-2">Myth 5:  All thyroid nodules or lumps are cancerous.</h2>
      <p><strong>Fact:</strong>This is not correct. In fact, only about 10% of thyroid nodules are cancerous. Several diagnostic procedures can be used to determine whether your nodule or lump is one of the rare cancerous lumps. Nodules that form in thyroid glands that are functioning normally are less likely to be cancerous than those that form in hyperthyroid patients. 

Radiation exposure, combined with advanced age, may increase the likelihood of a thyroid lump is cancerous. If thyroid nodules are not cancerous or interfering with your daily life, most doctors will leave them alone and reevaluate them every 6-12 months.</p>

  <h2 class="text-xl font-semibold mt-6 mb-2">Myth 6: It is a female disorder</h2>
      <p><strong>Fact:</strong>  Though, as with most autoimmune diseases, it affects far more women than men, men are not uncommonly diagnosed with hypothyroidism. TFT levels should be checked every five years if you are healthy, but if you have been diagnosed with hyper/hypothyroidism, TFT levels should be checked more frequently.

</p>
<h2 class="text-xl font-semibold mt-6 mb-2">Myth 7: I must follow a special diet because of my thyroid condition</h2>
      <p><strong>Fact:</strong>  Thyroid disease is not a lifestyle disease. Don't feed your brain with false information from non-medical websites. People with thyroid disorders, like everyone else, need to eat a healthy, well-balanced diet. Thyroid disorders are not caused by diet, so they won’t even be cured by diet.
</p>
<p>Get in touch with our endocrinologist if you suspect you have a thyroid disorder.

</p>
  

<h2 class="text-xl font-semibold mt-6 mb-2">TO KNOW MORE, BOOK AN APPOINTMENT NOW.

</h2>
     `
  }


];

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="p-10 text-center text-red-500">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{blog.date} | {blog.tag}</p>
      <img src={blog.img} alt={blog.title} className="w-full h-96 object-cover rounded-xl mb-8" />
      <div
        className="text-gray-700 leading-relaxed blog-content"
        dangerouslySetInnerHTML={{ __html: blog.htmlContent }}
      />
    </div>
  );
};

export default BlogDetail;
