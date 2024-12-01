import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { ministryData } from '../store/ministryData';

const serviceAccount = {
  "type": "service_account",
  "project_id": "doge-80d6d",
  "private_key_id": "df2846acd14dddfd4e9d4c47a3ab47ae1f9a5f7d",
  "private_key": process.env.NODE_ENV === 'production' 
    ? process.env.FIREBASE_PRIVATE_KEY 
    : "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBlx8xYDUfamGz\nHoa4FMk4eGmgxy2hJM3d0OpegcBfC5HBSIIyNad4WzxG7KiAoDcnc/m30zqj6IHd\nDHMbE0F5EVvHA9xIKWLnEkszrxvLo+SC6uXiCIW1YXapKoSAIfmNwWq9RqhzUjvh\n+CgcXrYc6xylCSZg3LG0g46TiiitkjtyQm9b+eaEb9MoDOnmCmoy1czjOvNip3Jh\npvX9gV2sp6kDjAKsI4KxqB64aeCO2NNRwtKPYeU/9l03RvQBMzzDFNOIA8+wMGwf\n0Ib9Ag3OXFsTOzTNqHZ4DpWpRT2eCPDcyGsrfReNCzfPfek7myxXg57P5bNpSYDi\ni6maxdr1AgMBAAECggEADOs+WCew89tAENmBKQiuEvgqKGISX/YaTOqzsUHcahtW\nCz2A/sPI3MXN5HfHmOnYNGhPal6Mw8Jw5CUAC3cCAAfSBZpy2Vf1szDr1tOhObpC\nth/h3m8uKRgLeKePNxPNWRHmwyHTfPqoZ2CNoLMLWSuxeiv9pSolK8Q5wAvQwiBp\n3FT/ejn56FYUjqMVhSrx7W9DxoNIbmqvWxodjBiplu32KAYbwRp6dmFWl+L3oLsc\ncwWVE3eiOd5luEdN4FUyAJvMaHMGRid/NhYlVH52nQTDKpvRGPstz8p05SqbhEqB\np2wZi9io7CD6K2K4xrF2I/H0t/aSSkVSxf4gDjCuMQKBgQDoqNyMJ6jtT/vf4ECn\nXHxe5WfVc2a2G5694UvZfEQxqbcZdrHMeR5LsLzAVsutvSdNVJgXzTdoyW0UZMOF\n97+jtOgBt21O5c/OgNZ2WUPtmklVNONgB2zOgdyPoieT5M7kOGtE+mwp451m3BKd\ns3bJYFdu82M9xlV6aFOuXEZE+QKBgQDVAuMTCwXlMnamLZD0lYb0txoiEBe7lTql\n8FV0PEXw8ec4MEPKmcsHIXnmwNIPIX21vsR22w9fmv72bMd/CHtGiI2Ecnf234WP\nCoNGP7g1IWi8U+GM5+7BC6HuKvfPTvxMgdfPTPIYJBB3Ocil2vRPcySJ5FYTXdjG\nZKAceSLQ3QKBgQCkv0YE/ORyvuuFOR+vIx9ydxGSpTf7Bg3fORTjuUn0vM/J+TGn\nr7BTOqA9tnhd245kBN36JLfyvIdAJKYLTEbonmaXKJL/hl4jRToX7dfa/SCmdF/5\nlOhoRq6vCszpveD+3DChVI6ZDvNbbcTE5NrdeBoRl8kTakkG968hzXd4yQKBgF2V\nlCAUsrVcs2YVFN9wJkezfkbC3TpruMWYzmJv7KaMEPLNuar0YI+0dHMd+evt4eYM\ndxJk8d8mIKgxaIB2QHrfmZU8GVqcH3iVvNELQ6oMEJDVJX4bk/i6XJ1fwVoSMKSI\nU0FfY+mZRqaq+21qwfV59+6hI/QEQi3/nZyE1/f9AoGBAIOOhxTv1s3YW2lUG2Og\n3G+gHvSEijtOWzjaHNUNs1/TiqETiWAH/Cet9aiG8JW2SIVB6wLHgJ+ReHPrQuEf\nwLMoHMkYkLjVOza/inaD9DHvsq8cjqgmyV6GhNtSh3iFFZ6eAqk+nWrxE0B1OMcm\nAFVfKWCQiFtKVLSXBFw3ie/R\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
  "client_email": "firebase-adminsdk-xevlv@doge-80d6d.iam.gserviceaccount.com",
  "client_id": "117820703465718914763",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xevlv%40doge-80d6d.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount as any)
});

const db = getFirestore();

async function seedDatabase() {
  try {
    // Clear existing collections
    console.log('Clearing existing collections...');
    const collections = ['ministries', 'ministry_updates'];
    
    for (const collectionName of collections) {
      const snapshot = await db.collection(collectionName).get();
      const batch = db.batch();
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    }

    // Seed ministries
    console.log('Seeding ministries...');
    for (const [id, ministry] of Object.entries(ministryData)) {
      console.log(`Adding ministry: ${ministry.name}`);
      const ministryRef = db.collection('ministries').doc(id);
      await ministryRef.set({
        ...ministry,
        id,
        createdAt: new Date().toISOString()
      });

      // Seed updates for this ministry
      console.log(`Seeding updates for ${ministry.name}...`);
      const batch = db.batch();
      ministry.newsUpdates.forEach((update, index) => {
        const updateRef = db.collection('ministry_updates').doc(`${id}-update-${index}`);
        batch.set(updateRef, {
          ...update,
          ministryId: id,
          id: `${id}-update-${index}`,
          createdAt: new Date().toISOString()
        });
      });
      await batch.commit();
    }

    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding
seedDatabase();