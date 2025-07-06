import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/LandingPage.module.css';

const PrivacyPolicy = () => {
  return (
    <Container className={`${styles.Container}`}>
      <Row>
        <Col>
          <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-gray-600">Last Updated: 15/03/25</p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">Information We Collect</h3>
          <h3 className="mt-3 font-medium">Personal Data</h3>
          <p>We may collect personal data that you voluntarily provide when interacting with our Site. This may include, but is not limited to:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address</li>
            <li>Any other details you provide via our contact forms or direct communication.</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="font-medium">Automatically Collected Data</h3>
          <p>When you access the Site, we may gather certain technical data automatically through cookies, analytics tools, and other tracking technologies, such as:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referral sources (e.g., how you arrived at our Site)</li>
            <li>Usage patterns and interaction details.</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">How We Use Your Information</h3>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To operate and manage our Site</li>
            <li>To communicate with you and address inquiries</li>
            <li>To tailor your experience and improve usability</li>
            <li>To analyse website traffic and enhance functionality</li>
            <li>To detect fraud and enhance security</li>
            <li>To comply with legal requirements.</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">Data Protection & Security</h3>
          <p>We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. While we strive to maintain a secure environment, no online transmission or storage method is completely infallible.</p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">Your Rights & Choices</h3>
          <ul>
            <li>You may opt not to provide certain personal data; however, this may affect your experience on our Site.</li>
            <li>You can manage cookies through your browser settings.</li>
            <li>You may request access, correction, or deletion of your personal data by contacting us.</li>
          </ul>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">Third-Party Links</h3>
          <p>Our Site may contain links to external websites not operated by us. We are not responsible for the privacy practices or content of these third-party sites.</p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">Policy Updates</h3>
          <p>We reserve the right to update this Privacy Policy at any time. Any changes will take effect immediately upon posting. We recommend reviewing this page periodically to stay informed.</p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>For questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:info@hjgoodwin.com" className="text-blue-500 underline">info@hjgoodwin.com</a>.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;