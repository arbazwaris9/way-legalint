import { AlertTriangle } from 'lucide-react';

interface DisclaimerModalProps {
  onAgree: () => void;
}

export default function DisclaimerModal({ onAgree }: DisclaimerModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-3xl font-light text-[#1a2332]">DISCLAIMER</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on 'I AGREE', the user acknowledges that:
            </p>

            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                The user wishes to gain more information about WAY Legal, its practice areas and its attorneys, for his/her own information and use;
              </li>
              <li>
                The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and
              </li>
              <li>
                None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
              </li>
            </ul>

            <p className="font-medium">
              WAY Legal is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onAgree}
              className="bg-[#1a2332] hover:bg-[#2a3f5f] text-white px-12 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              I AGREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
