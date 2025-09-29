import Image from "next/image";

// Define the Certificate interface
interface Certificate {
  id: number;
  title: string;
  standard: string;
  description: string;
  validFrom: string;
  validUntil: string;
  image: string;
  issuedBy: string;
  certificateNo: string;
}

export default function CertificateCard({ certificate, index, isLast }: { certificate: Certificate, index: number, isLast: boolean }) {
  return (
    <div className="flex flex-col md:flex-row relative items-start">
      {/* Certificate Image Column (Left) */}
      <div className="flex-shrink-0 w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 text-center md:text-right">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={150}
          height={150}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Content Box (Right) */}
      <div className="flex-1 w-full md:w-3/4 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{certificate.title}</h3>
        <p className="text-gray-600 mb-2">{certificate.standard}</p>
        <p className="text-gray-600 mb-4">{certificate.description}</p>
        <div className="text-gray-600 text-sm">
          <p>Issued By: {certificate.issuedBy}</p>
          <p>Certificate No: {certificate.certificateNo}</p>
          <p>Valid From: {certificate.validFrom}</p>
          <p>Valid Until: {certificate.validUntil}</p>
        </div>
      </div>
    </div>
  );
}
