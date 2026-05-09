import React, { useState } from "react";
import "./Project.css";


/* ─── Jangoz ─── */
const jangozImages = [
  "/assets/jangoz/jangoz1.JPG",
  "/assets/jangoz/jangoz2.JPG",
  "/assets/jangoz/jangoz3.JPG",
  "/assets/jangoz/jangoz4.JPG",
  "/assets/jangoz/jangoz5.JPG",
  "/assets/jangoz/jangoz6.JPG",
  "/assets/jangoz/jangoz7.JPG",
  "/assets/jangoz/jangoz8.JPG",
  "/assets/jangoz/jangoz9.JPG",
  "/assets/jangoz/jangoz10.JPG",
  "/assets/jangoz/jangoz11.JPG",
  "/assets/jangoz/jangoz12.JPG",

];

/* ─── Manoj Bhavan ─── */
const manojImages = [
  "/assets/manoj bhavan/manojbhavan1.jpg",
  "/assets/manoj bhavan/manojbhavan2.jpg",
  "/assets/manoj bhavan/manojbhavan3.jpg",
];

/* ─── Padmam ─── */
const padmamImages = [
  "/assets/Padmam/HRP09685.jpg",
  "/assets/Padmam/HRP09690.jpg",
  "/assets/Padmam/HRP09703.jpg",
  "/assets/Padmam/HRP09708.jpg",
  "/assets/Padmam/HRP09712.jpg",
  "/assets/Padmam/HRP09715.jpg",
  "/assets/Padmam/HRP09722.jpg",
  "/assets/Padmam/HRP09737.jpg",
  "/assets/Padmam/HRP09757.jpg",
  "/assets/Padmam/HRP09766.jpg",
  "/assets/Padmam/HRP09773.jpg",
  "/assets/Padmam/HRP09784.jpg",
  "/assets/Padmam/HRP09789.jpg",
  "/assets/Padmam/HRP09791.jpg",
  "/assets/Padmam/HRP09795.jpg",
  "/assets/Padmam/HRP09807.jpg",
  "/assets/Padmam/HRP09821.jpg",
  "/assets/Padmam/HRP09829.jpg",
  "/assets/Padmam/HRP09836.jpg",
  "/assets/Padmam/HRP09863.jpg",
  "/assets/Padmam/HRP09889.jpg",
  "/assets/Padmam/HRP09892.jpg",
  "/assets/Padmam/HRP09908.jpg",
  "/assets/Padmam/HRP09920.jpg",
];

/* ─── RWD Club House ─── */
const rwdImages = [
  "/assets/rwd club house/rwdclubhouse1.JPG",
  "/assets/rwd club house/rwdclubhouse2.JPG",
  "/assets/rwd club house/rwdclubhouse3.JPG",
  "/assets/rwd club house/rwdclubhouse4.JPG",
  "/assets/rwd club house/06d8777c-5d90-4c1c-a5bc-4af65d9a719c.JPG",
  "/assets/rwd club house/346d16a0-de1a-434a-a369-a8925f790b07.JPG",
  "/assets/rwd club house/34a79609-9500-435b-bf70-5d31cff0863e.JPG",
  "/assets/rwd club house/34c9ada8-5607-433e-9f40-2a6f06283332.JPG",
  "/assets/rwd club house/37a2f7e1-77d0-423c-b124-32382c55f01c.JPG",
  "/assets/rwd club house/450754a9-267c-4532-9d54-3f7ad225df8c.JPG",
  "/assets/rwd club house/4981ca09-1464-4478-9803-760bf4e16a26.JPG",
  "/assets/rwd club house/59e96d41-f902-4088-87be-8e5a758cfcb2.JPG",
  "/assets/rwd club house/601bfb6f-75be-4305-acf8-d1da775b6f5c.JPG",
  "/assets/rwd club house/6035f439-ef98-4fc0-9068-586488845ac0.JPG",
  "/assets/rwd club house/62e32fed-23eb-4a9f-8f68-06c5d15940f3.JPG",
  "/assets/rwd club house/63e6c634-88a1-43d3-a609-f4efc1a3c583.JPG",
  "/assets/rwd club house/7bde0d92-ebec-4951-a154-1c475b6f4c53.JPG",
  "/assets/rwd club house/94c144e6-0146-4cc7-99bc-f36bba177870.JPG",
  "/assets/rwd club house/a67dc908-0577-4139-a428-8c2cc4047c44.JPG",
  "/assets/rwd club house/c9cb4fba-72d2-4d38-bf46-93da3f2d57f7.JPG",
  "/assets/rwd club house/d635543c-8759-4abc-96ec-5a054e0b0099.JPG",
  "/assets/rwd club house/e53ea7f0-636e-4994-b198-1406b41fca94.JPG",
  "/assets/rwd club house/f70da175-09a5-4b9b-b87e-fb1e7572f144.JPG",
  "/assets/rwd club house/fd4e251d-284f-4d93-86e9-6b6cb5c925c7.JPG",
];

/* ─── Helper: split array into rows of N ─── */
const chunkArray = ( arr, size ) =>
{
  const chunks = [];
  for ( let i = 0; i < arr.length; i += size )
  {
    chunks.push( arr.slice( i, i + size ) );
  }
  return chunks;
};

/* ─── Reusable image row renderer ─── */
const ImageRow = ( { images, rowClass, projectName, offset = 0 } ) => (
  <div className={ `jangoz-row ${ rowClass }` }>
    { images.map( ( src, i ) => (
      <div key={ i + offset } className="jangoz-img-card">
        <img src={ src } alt={ `${ projectName } ${ i + offset + 1 }` } loading="lazy" />
        <div className="jangoz-img-overlay">
          <span>{ `${ projectName } ${ i + offset + 1 }` }</span>
        </div>
      </div>
    ) ) }
  </div>
);

const Project = () =>
{
  /* Jangoz rows — 4-4-4 */
  const jRow1 = jangozImages.slice( 0, 4 );
  const jRow2 = jangozImages.slice( 4, 8 );
  const jRow3 = jangozImages.slice( 8, 12 );

  /* Padmam rows — 6 rows of 4 */
  const padmamRows = chunkArray( padmamImages, 4 );

  /* RWD rows — 6 rows of 4 */
  const rwdRows = chunkArray( rwdImages, 4 );

  return (
    <section className="jangoz-project-section">

      {/* ══════════════ HERO SLIDER ══════════════ */ }


      <div className="jangoz-container">
        <br /><br /><br />

        {/* ══════════════ JANGOZ ══════════════ */ }
        <div className="jangoz-heading-wrapper">

          <h1 style={ { fontWeight: "450" } }>JANGOZ</h1>
          <div className="jangoz-heading-line" />
        </div>

        <ImageRow images={ jRow1 } rowClass="jangoz-row-4" projectName="Jangoz" offset={ 0 } />
        <ImageRow images={ jRow2 } rowClass="jangoz-row-4" projectName="Jangoz" offset={ 4 } />
        <ImageRow images={ jRow3 } rowClass="jangoz-row-4" projectName="Jangoz" offset={ 8 } />
        <br /><br /><br />

        {/* ══════════════ MANOJ BHAVAN ══════════════ */ }
        <div className="jangoz-heading-wrapper">
          <h1 style={ { fontWeight: "450" } }>MANOJ BHAVAN</h1>
          <div className="jangoz-heading-line" />
        </div>


        <div className="jangoz-row jangoz-row-4">
          { manojImages.map( ( src, i ) => (
            <div key={ i } className="jangoz-img-card">
              <img src={ src } alt={ `Manoj Bhavan ${ i + 1 }` } loading="lazy" />
              <div className="jangoz-img-overlay">
                <span>{ `Manoj Bhavan ${ i + 1 }` }</span>
              </div>
            </div>
          ) ) }
          {/* Empty 4th slot */ }
          <div className="jangoz-img-card" style={ { visibility: 'hidden' } } />
        </div>
        <br /><br /><br />

        {/* ══════════════ PADMAM ══════════════ */ }
        <div className="jangoz-heading-wrapper">
          <h1 style={ { fontWeight: "450" } }>PADMAM</h1>
          <div className="jangoz-heading-line" />
        </div>

        { padmamRows.map( ( row, rowIdx ) => (
          <ImageRow
            key={ rowIdx }
            images={ row }
            rowClass="jangoz-row-4"
            projectName="Padmam"
            offset={ rowIdx * 4 }
          />
        ) ) }
        <br /><br /><br />

        {/* ══════════════ RWD CLUB HOUSE ══════════════ */ }
        <div className="jangoz-heading-wrapper">
          <h1 style={ { fontWeight: "450" } }>RWD CLUB HOUSE</h1>
          <div className="jangoz-heading-line" />
        </div>

        { rwdRows.map( ( row, rowIdx ) => (
          <ImageRow
            key={ rowIdx }
            images={ row }
            rowClass="jangoz-row-4"
            projectName="RWD Club House"
            offset={ rowIdx * 4 }
          />
        ) ) }

      </div>



    </section>



  );
};

export default Project;
