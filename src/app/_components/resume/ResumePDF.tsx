import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeObj from "./workExperience";
import formatMonthYearISO from '../../_utils/DateFormat';
import { mySkillsData } from '../../_utils/skillData';

const c = {
    ink:    '#0f172a',
    slate:  '#334155',
    muted:  '#64748b',
    accent: '#0f766e',
    light:  '#f1f5f9',
    border: '#e2e8f0',
};

const s = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 8,
        paddingTop: 24,
        paddingHorizontal: 32,
        paddingBottom: 20,
        color: c.slate,
        backgroundColor: '#fff',
    },
    // ── Header ──────────────────────────────────────────────
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottomWidth: 1.5,
        borderBottomColor: c.accent,
        paddingBottom: 8,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Helvetica-Bold',
        color: c.ink,
        letterSpacing: 0.3,
    },
    titleText: {
        fontSize: 8.5,
        color: c.muted,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        marginTop: 2,
    },
    headerMeta: {
        fontSize: 7.5,
        color: c.muted,
        textAlign: 'right',
        lineHeight: 1.5,
    },
    // ── Two-column body ──────────────────────────────────────
    body: {
        flexDirection: 'row',
        gap: 18,
    },
    leftCol: {
        flex: 6,
    },
    rightCol: {
        flex: 4,
    },
    // ── Section ─────────────────────────────────────────────
    section: {
        marginBottom: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 7.5,
        fontFamily: 'Helvetica-Bold',
        color: c.accent,
        letterSpacing: 0.9,
        textTransform: 'uppercase',
    },
    sectionRule: {
        flexGrow: 1,
        height: 0.8,
        marginLeft: 6,
        backgroundColor: c.border,
    },
    // ── Entry ────────────────────────────────────────────────
    entry: {
        marginBottom: 6,
        paddingLeft: 7,
        borderLeftWidth: 2,
        borderLeftColor: c.accent,
    },
    entryTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    jobTitle: {
        fontSize: 8.5,
        fontFamily: 'Helvetica-Bold',
        color: c.ink,
        flex: 1,
    },
    dateText: {
        fontSize: 7,
        color: c.muted,
        fontFamily: 'Helvetica-Oblique',
        marginLeft: 4,
        flexShrink: 0,
    },
    company: {
        fontSize: 7.5,
        color: c.accent,
        fontFamily: 'Helvetica-Bold',
        textDecoration: 'none',
        marginBottom: 2,
    },
    location: {
        fontSize: 7,
        color: c.muted,
        fontFamily: 'Helvetica-Oblique',
        marginBottom: 2,
    },
    bullet: {
        fontSize: 7.5,
        color: c.slate,
        lineHeight: 1.35,
        marginLeft: 6,
    },
    skillsLine: {
        fontSize: 7,
        color: c.muted,
        marginTop: 2,
    },
    skillsLineAccent: {
        fontFamily: 'Helvetica-Bold',
        color: c.accent,
    },
    // ── Skills grid (right col) ──────────────────────────────
    skillPill: {
        fontSize: 7.5,
        color: c.slate,
        backgroundColor: c.light,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        marginRight: 4,
        marginBottom: 4,
    },
    skillsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

const ResumePDF = () => {
    const sortedWork = [...resumeObj.work_exp].sort((a, b) => b.end_date.getTime() - a.end_date.getTime());

    const skillName = (key: number) => mySkillsData.find(s => s.key === key)?.name ?? '';

    const allSkillKeys = Array.from(new Set([
        ...resumeObj.work_exp.flatMap(e => e.skills),
        ...resumeObj.education.flatMap(e => e.skills),
    ]));

    return (
        <Document>
            <Page size="A4" style={s.page}>
                {/* Header */}
                <View style={s.header}>
                    <View>
                        <Text style={s.name}>Michael Kick</Text>
                        <Text style={s.titleText}>Software Engineer</Text>
                    </View>
                    <Text style={s.headerMeta}>
                        {'Regensburg, Germany\nmichas-tech.com'}
                    </Text>
                </View>

                {/* Body */}
                <View style={s.body}>
                    {/* Left: Work Experience */}
                    <View style={s.leftCol}>
                        <View style={s.section}>
                            <View style={s.sectionHeader}>
                                <Text style={s.sectionTitle}>Work Experience</Text>
                                <View style={s.sectionRule} />
                            </View>
                            {sortedWork.map((exp, i) => {
                                const skills = exp.skills.map(skillName).filter(Boolean).join(', ');
                                return (
                                    <View key={i} style={s.entry} wrap={false}>
                                        <View style={s.entryTop}>
                                            <Text style={s.jobTitle}>{exp.activity}</Text>
                                            <Text style={s.dateText}>
                                                {formatMonthYearISO(exp.start_date)} – {formatMonthYearISO(exp.end_date)}
                                            </Text>
                                        </View>
                                        <Link style={s.company} src={exp.companyLink}>@{exp.companyName}</Link>
                                        <Text style={s.location}>{exp.city}, {exp.country}</Text>
                                        {exp.description.slice(0, 2).map((pt, j) => (
                                            <Text key={j} style={s.bullet}>• {pt}</Text>
                                        ))}
                                        {skills ? (
                                            <Text style={s.skillsLine}>
                                                <Text style={s.skillsLineAccent}>Skills: </Text>{skills}
                                            </Text>
                                        ) : null}
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                    {/* Right: Education + Skills */}
                    <View style={s.rightCol}>
                        <View style={s.section}>
                            <View style={s.sectionHeader}>
                                <Text style={s.sectionTitle}>Education</Text>
                                <View style={s.sectionRule} />
                            </View>
                            {resumeObj.education.map((edu, i) => {
                                const skills = edu.skills.map(skillName).filter(Boolean).join(', ');
                                return (
                                    <View key={i} style={s.entry} wrap={false}>
                                        <View style={s.entryTop}>
                                            <Text style={s.jobTitle}>{edu.academicTitle}</Text>
                                        </View>
                                        <Text style={s.dateText}>
                                            {formatMonthYearISO(edu.start_date)} – {formatMonthYearISO(edu.end_date)}
                                        </Text>
                                        <Link style={s.company} src={edu.uniLink}>@{edu.university}</Link>
                                        <Text style={s.location}>{edu.city}, {edu.country}</Text>
                                        {edu.description.slice(0, 2).map((pt, j) => (
                                            <Text key={j} style={s.bullet}>• {pt}</Text>
                                        ))}
                                        {skills ? (
                                            <Text style={s.skillsLine}>
                                                <Text style={s.skillsLineAccent}>Skills: </Text>{skills}
                                            </Text>
                                        ) : null}
                                    </View>
                                );
                            })}
                        </View>

                        <View style={s.section}>
                            <View style={s.sectionHeader}>
                                <Text style={s.sectionTitle}>Skills</Text>
                                <View style={s.sectionRule} />
                            </View>
                            <View style={s.skillsWrap}>
                                {allSkillKeys.map((key, i) => (
                                    <Text key={i} style={s.skillPill}>{skillName(key)}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default ResumePDF;
