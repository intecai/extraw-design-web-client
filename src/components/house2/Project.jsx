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
  // "/assets/jangoz/jangoz9.JPG",
  // "/assets/jangoz/jangoz10.JPG",
  // "/assets/jangoz/jangoz11.JPG",
  // "/assets/jangoz/jangoz12.JPG",

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
  // "/assets/Padmam/HRP09757.jpg",
  // "/assets/Padmam/HRP09766.jpg",
  // "/assets/Padmam/HRP09773.jpg",
  // "/assets/Padmam/HRP09784.jpg",
  // "/assets/Padmam/HRP09789.jpg",
  // "/assets/Padmam/HRP09791.jpg",
  // "/assets/Padmam/HRP09795.jpg",
  // "/assets/Padmam/HRP09807.jpg",
  // "/assets/Padmam/HRP09821.jpg",
  // "/assets/Padmam/HRP09829.jpg",
  // "/assets/Padmam/HRP09836.jpg",
  // "/assets/Padmam/HRP09863.jpg",
  // "/assets/Padmam/HRP09889.jpg",
  // "/assets/Padmam/HRP09892.jpg",
  // "/assets/Padmam/HRP09908.jpg",
  // "/assets/Padmam/HRP09920.jpg",
];

/* ─── RWD Club House ─── */
const rwdImages = [
  "/assets/rwd club house/rwdclubhouse1.JPG",
  "/assets/rwd club house/rwdclubhouse2.JPG",
  "/assets/rwd club house/rwdclubhouse3.JPG",
  "/assets/rwd club house/rwdclubhouse4.JPG",
  "/assets/rwd club house/rwdclubhouse5.JPG",
  "/assets/rwd club house/rwdclubhouse6.JPG",
  "/assets/rwd club house/rwdclubhouse7.JPG",
  "/assets/rwd club house/rwdclubhouse8.JPG",
  // "/assets/rwd club house/rwdclubhouse9.JPG",
  // "/assets/rwd club house/rwdclubhouse10.JPG",
  // "/assets/rwd club house/rwdclubhouse11.JPG",
  // "/assets/rwd club house/rwdclubhouse12.JPG",
  // "/assets/rwd club house/rwdclubhouse13.JPG",
  // "/assets/rwd club house/rwdclubhouse14.JPG",
  // "/assets/rwd club house/rwdclubhouse15.JPG",
  // "/assets/rwd club house/rwdclubhouse16.JPG",
  // "/assets/rwd club house/rwdclubhouse17.JPG",
  // "/assets/rwd club house/rwdclubhouse18.JPG",
  // "/assets/rwd club house/rwdclubhouse19.JPG",
  // "/assets/rwd club house/rwdclubhouse20.JPG",
  // "/assets/rwd club house/rwdclubhouse21.JPG",
  // "/assets/rwd club house/rwdclubhouse22.JPG",
  // "/assets/rwd club house/rwdclubhouse23.JPG",
  // "/assets/rwd club house/rwdclubhouse24.JPG",
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


        {/* ══════════════ JANGOZ ══════════════ */ }
        <div className="jangoz-heading-wrapper jangoz-section-gap" id="jangoz">
          <h1 style={ { fontWeight: "450" } }>JANGOZ</h1>
          <div className="jangoz-heading-line" />
        </div>

        <ImageRow images={ jRow1 } rowClass="jangoz-row-4" projectName="Jangoz" offset={ 0 } />
        <ImageRow images={ jRow2 } rowClass="jangoz-row-4" projectName="Jangoz" offset={ 4 } />
        <ImageRow images={ jRow3 } rowClass="jangoz-row-4" projectName="Jangoz" offset={ 8 } />


        {/* ══════════════ MANOJ BHAVAN ══════════════ */ }
        <div className="jangoz-heading-wrapper jangoz-section-gap" id="manoj-bhavan">
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
        {/* ══════════════ PADMAM ══════════════ */ }
        <div className="jangoz-heading-wrapper jangoz-section-gap" id="padmam">
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


        {/* ══════════════ RWD CLUB HOUSE ══════════════ */ }
        <div className="jangoz-heading-wrapper jangoz-section-gap" id="rwd-club-house">
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
